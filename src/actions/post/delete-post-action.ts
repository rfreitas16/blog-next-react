'use server';

import { postRepository } from '@/repositories/post';


export async function deletePostAction(id: string) {
  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados invalidos',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: 'Erro desconhecido',
    };
  }
  return {
    error: '',
  };
}
