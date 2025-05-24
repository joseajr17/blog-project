import { postRepository } from "@/repositories/post/json-post-repository"
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => await postRepository.findAllPublic());

export const findPostByIdCached = cache(async (id: string) => await postRepository.findById(id));

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});
