'use server';

import { verifyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: 'Faça login novamente em outra aba'
    }
  }

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    }
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message
      };
    }

    return {
      error: 'Erro desconhecido'
    };
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  }
}