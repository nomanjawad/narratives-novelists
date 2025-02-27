"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullname: "",
        university_id: 0,
        university_card: "",
      }}
      onSubmit={async (data) => {
        console.log(data);
        return { success: true };
      }}
    />
  );
};

export default page;
