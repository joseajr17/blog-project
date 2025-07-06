'use server';

import { makePartialPublicPost, makePublicPostFromDb, PublicPost } from '@/dto/post/dto';
import { PostUpdateSchema } from '@/lib/validations';
import { postRepository } from '@/repositories/post';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { revalidateTag } from 'next/cache';

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function updatePostAction(prevState: UpdatePostActionState, formData: FormData
): Promise<UpdatePostActionState> {

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos.'],
    };
  }

  const id = formData.get('id')?.toString() || '';

  if (!id || typeof id !== 'string') {
    return {
      formState: prevState.formState,
      errors: ['ID inválido.'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());

    return {
      errors,
      formState: makePartialPublicPost(formDataToObj)
    };
  }

  const validPostData = zodParsedObj.data;

  const newPost = {
    ...validPostData
  };

  let post;

  try {
    post = await postRepository.update(id, newPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [error.message]
      };
    }

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ['Erro desconhecido!']
    }
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: true
  }
}