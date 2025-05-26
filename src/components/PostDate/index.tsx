import { formatDateTime, formatToRelativeDate } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string
}

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time dateTime={dateTime} title={formatToRelativeDate(dateTime)}
      className="text-slate-600 dark:text-slate-400 text-sm">
      {formatDateTime(dateTime)}
    </time>
  );
}