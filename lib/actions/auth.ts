"use server";

import { signIn } from "@/auth";
import { db } from "@/database/db";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  // Check if the user exists
  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (user?.error) {
      return { success: false, message: "Invalid credentials" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "User not found" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityId, universityCard } = params;

  // Check if the user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email.toString()))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await hash(password.toString(), 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
      universityId,
      universityCard,
    });
    await signInWithCredentials({ email, password });

    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error creating user" };
  }
};
