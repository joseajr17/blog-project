import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";
import { findAllPostsPublicCached } from "@/lib/publicQueries";

export async function FeaturedPost() {
  const posts = await findAllPostsPublicCached();
  const post = posts[0];

  if (posts.length <= 0) {
    return (
      // Criar um Component de Message depois
      <h1 className="text-center text-2xl font-bold py-10 bg-red-500">Nenhum Post Publicado!</h1>
    );
  }

  const postLink = `post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 group sm:grid-cols-2">
      <PostImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: post.coverImageUrl, width: 1200, height: 720, alt: post.title, priority: true,
        }}
      />

      <PostSummary createdAt={post.createdAt} postLink={postLink} title={post.title} excerpt={post.excerpt} />

    </section>
  );
}