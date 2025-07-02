'use server';

import { PublicPost } from '@/dto/post/dto';

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos.'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());

  return {
    formState: prevState.formState,
    errors: [],
  };
}