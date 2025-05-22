import { postRespository } from "@/repositories/post/json-post-repository";
import { PostImage } from "../PostImage";
import { Heading } from "../Heading";

export async function PostsList() {
  const posts = await postRespository.findAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map(post => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostImage
              linkProps={{
                href: `post/${post.slug}`,
              }}
              imageProps={{
                src: post.coverImageUrl, width: 1200, height: 720, alt: post.title,
              }}
            />
            <div className="flex flex-col gap-4 justify-center">
              <time dateTime={post.createdAt} className="text-slate-600 dark:text-slate-400 text-sm">{post.createdAt}</time>

              <Heading url="#">{post.title}</Heading>

              <p>
                {post.excerpt}
              </p>
            </div>

          </div>
        )
      })}
    </div>
  );
}