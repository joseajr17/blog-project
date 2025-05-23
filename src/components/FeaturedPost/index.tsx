import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/queries";

export async function FeaturedPost() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

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