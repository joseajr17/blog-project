import { SinglePost } from "@/components/SinglePost";
import { findPostBySlugPublicCached } from "@/lib/publicQueries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugPublicCached(slug);

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