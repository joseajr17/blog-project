import { postRepository } from "@/repositories/post/index"
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPostsPublicCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  {
    tags: ['posts'],
  },
);

export const findPostBySlugPublicCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    },
  )(slug);