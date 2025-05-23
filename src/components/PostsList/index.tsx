import { postRespository } from "@/repositories/post/json-post-repository";
import { PostCard } from "../PostCard";

export async function PostsList() {
  const posts = await postRespository.findAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map(post => {
        return (
          <PostCard
            key={post.id} id={post.id} slug={post.slug} coverImageUrl={post.coverImageUrl}
            title={post.title} createdAt={post.createdAt} excerpt={post.excerpt}
          />
        )
      })}
    </div>
  );
}