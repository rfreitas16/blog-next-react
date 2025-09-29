'use server';

import { asyncDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000); // Vou manter

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados Invalidos',
    };
  }
 //Dados que o usuario digitou no formulario
  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = '';

  return {
    username: '',
    error: 'Teste de erro',
  };
}
