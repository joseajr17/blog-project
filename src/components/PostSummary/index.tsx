import { Heading } from "../Heading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
  createdAt: string,
  postLink: string
  title: string,
  excerpt: string
}

export function PostSummary({ createdAt, postLink, title, excerpt }: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <PostDate dateTime={createdAt} />

      <Heading url={postLink}>{title}</Heading>

      <p>
        {excerpt}
      </p>
    </div>);
}