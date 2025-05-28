import { SinglePost } from "@/components/SinglePost";
import { postRepository } from "@/repositories/post/json-post-repository";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await postRepository.findBySlugPublic(slug);

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    // Colocar fallback depois
    <Suspense>
      <SinglePost slug={slug} />
    </Suspense>

  );
}