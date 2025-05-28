import { postRepository } from "@/repositories/post/index"
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => await postRepository.findAllPublic());

export const findPostByIdCached = cache(async (id: string) => await postRepository.findById(id));

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlugPublic(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});