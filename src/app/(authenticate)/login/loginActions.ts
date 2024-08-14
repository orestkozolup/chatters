"use server";

import { LoginFormSchema } from "./validation";

export async function loginAction(formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}
