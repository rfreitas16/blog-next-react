'use server';

import { postRepository } from '@/repositories/post';
import { logColor } from '@/utils/log-color';

export async function deletePostAction(id: string) {
  logColor('' + id);
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
