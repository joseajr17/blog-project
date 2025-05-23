import { formatDateTime, formatToRelativeDate } from "@/utils/format-datetime";
import { Heading } from "../Heading";

type PostSummaryProps = {
  createdAt: string,
  postLink: string
  title: string,
  excerpt: string
}

export function PostSummary({ createdAt, postLink, title, excerpt }: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <time dateTime={createdAt} title={formatToRelativeDate(createdAt)}
        className="text-slate-600 dark:text-slate-400 text-sm">
        {formatDateTime(createdAt)}
      </time>

      <Heading url={postLink}>{title}</Heading>

      <p>
        {excerpt}
      </p>
    </div>);
}