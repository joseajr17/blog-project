'use server';

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    }
  }

  const post = await postRepository.findById(id);

  if (!post) {
    return {
      error: 'Este post não existe',
    }
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  }
}