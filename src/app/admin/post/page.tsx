import { PostListAdmin } from "@/components/admin/PostListAdmin";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    // colocar fallback depois
    <Suspense>
      <PostListAdmin />
    </Suspense>
  );
}