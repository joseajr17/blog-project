import { postRepository } from "@/repositories/post/index";
import Image from "next/image";
import { Heading } from "../Heading";
import { PostDate } from "../PostDate";
import { MarkDownSafe } from "../MarkDownSafe";

type SinglePostProps = {
  slug: string;
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await postRepository.findBySlugPublic(slug);
  return (
    <article className="text-justify mb-16">
      <header className="flex flex-col gap-4 mb-4">
        <Image src={post.coverImageUrl} width={1200} height={720} alt={post.title}
          className="rounded-xl"
        />

        <Heading url={`/post/${post.slug}`}> {post.title} </Heading>

        <p>{post.author} | <PostDate dateTime={post.createdAt} /></p>
      </header>

      <p className="text-xl mb-12 italic dark:text-slate-500 text-slate-500">{post.excerpt}</p>

      <MarkDownSafe markDown={post.content} />
    </article>
  );
}