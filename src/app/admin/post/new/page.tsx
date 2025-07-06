import { PostForm } from "@/components/admin/PostForm";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Criar post',
};

export default async function AdminPostNewPage() {
  return (
    <div>
      <h1 className='text-xl font-extrabold'>Criar post</h1>
      <PostForm mode="create" />
    </div>
  );
}