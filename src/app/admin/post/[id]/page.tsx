import { PostForm } from "@/components/admin/PostForm";
import { makePublicPostFromDb } from "@/dto/post/dto";
import { postRepository } from "@/repositories/post";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export const metaData: Metadata = {
  title: 'Editar post',
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>
};

export default async function AdminPostIdPage({ params }: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await postRepository.findById(id).catch();

  if (!post)
    notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-xl font-extrabold'>Editar post</h1>
      <PostForm publicPost={publicPost} />
    </div>
  );
}