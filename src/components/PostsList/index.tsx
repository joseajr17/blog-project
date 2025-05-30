import { PostCard } from "../PostCard";
import { findAllPostsPublicCached } from "@/lib/publicQueries";

export async function PostsList() {
  const posts = await findAllPostsPublicCached();

  if (posts.length <= 1) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
      {posts.slice(1).map(post => {
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