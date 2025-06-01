import { PostForm } from "@/components/admin/PostForm";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <PostForm />
    </>
  );
}