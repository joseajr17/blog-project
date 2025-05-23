import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";

type PostCardProps = {
  id: string,
  slug: string,
  coverImageUrl: string,
  title: string,
  createdAt: string,
  excerpt: string
}

export function PostCard({ id, slug, coverImageUrl, title, createdAt, excerpt }: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 group" key={id}>
      <PostImage
        linkProps={{
          href: `post/${slug}`,
        }}
        imageProps={{
          src: coverImageUrl, width: 1200, height: 720, alt: title,
        }}
      />
      <PostSummary createdAt={createdAt} postLink={`post/${slug}`} title={title} excerpt={excerpt} />

    </div>
  );
}