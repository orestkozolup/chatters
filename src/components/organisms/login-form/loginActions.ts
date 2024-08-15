"use server";

import { signIn } from "@/auth";
import { LoginFormSchema } from "./validation";

export async function loginAction(formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    return {}
  }
}

export const handleClick = async ({}) => {
  "use server"
  await signIn('google');
}
