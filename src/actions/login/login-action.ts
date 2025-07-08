'use server'

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import { redirect } from "next/navigation";

type LoginActionState = {
  username: string,
  error: string
}

export async function loginAction(state: LoginActionState, formData: FormData) {

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos'
    };
  }

  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  if (!username || !password) {
    return {
      username,
      error: 'Digite o usuário e a senha'
    };
  }

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || '',
  );

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username: '',
      error: 'Usuário ou senha inválida.'
    };
  }

  await createLoginSession(username);
  redirect('/admin/post');
}