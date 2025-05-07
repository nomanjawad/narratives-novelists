"use client";
import AuthForm from "@/components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth";
import { signInSchema } from "@/lib/validation";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (data) => {
        const result = await signInWithCredentials(data);
        if (!result) return { success: false, error: "Unknown error" };
        return { success: result.success, error: result.message };
      }}
    />
  );
};

export default page;
