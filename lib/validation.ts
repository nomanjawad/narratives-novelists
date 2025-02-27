import { number, z } from "zod";

export const signUpSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  university_id: z.coerce.number(),
  university_card: z.string().nonempty("University Card Is Required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
