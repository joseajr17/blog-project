import { postRepository } from "@/repositories/post/json-post-repository";

type SinglePostProps = {
  slug: string;
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await postRepository.findBySlug(slug);
  return (
    <div>{post.title}</div>
  );
}