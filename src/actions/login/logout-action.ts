'use server'

type LogoutActionState = {
  username: string,
  error: string
}

export async function logoutAction(state: LogoutActionState, formData: FormData) {


  return {
    username: '',
    error: 'Teste de erro!!!'
  }
}