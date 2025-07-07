'use server'

type LoginActionState = {
  username: string,
  error: string
}

export async function loginAction(state: LoginActionState, formData: FormData) {


  return {
    username: '',
    error: 'Teste de erro!!!'
  }
}