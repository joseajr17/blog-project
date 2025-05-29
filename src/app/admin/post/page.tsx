import { findAllPostsAdmin } from "@/lib/adminQueries";

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin();

  return (
    <div className="py-16 text-xl">
      {posts.map(post => {
        return <p key={post.id}> - {post.title} </p>
      })}
    </div>
  );
}