import { findAllPostsAdmin } from "@/lib/adminQueries";
import Link from "next/link";
import { DeletePostBtn } from "../DeletePostBtn";

export async function PostListAdmin() {
  const posts = await findAllPostsAdmin();

  if (posts.length <= 0) {
    return (
      // Criar um Component de Message depois
      <h1 className="text-center text-2xl font-bold py-10 bg-red-500">Nenhum Post Criado!</h1>
    );
  }

  return (
    <div className="mb-16">
      {posts.map(post => {
        return (
          <div key={post.id} className={`flex p-2 ${!post.published && 'bg-slate-300 dark:bg-slate-500'} gap-4 items-center justify-between`}>
            <Link href={`/admin/post/${post.id}`}> - {post.title} </Link>

            {!post.published && (
              <span className="text-slate-500 dark:text-slate-300 text-sm italic">(Não publicado)</span>
            )}

            <DeletePostBtn id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}