import Link from "next/link";

type HeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
}

export function Heading({ children, url, as: TagH = 'h2' }: HeadingProps) {
  const headingMapClasses = {
    h1: 'text-2xl font-extrabold sm:text-4xl md:text-4xl',
    h2: 'text-xl/tight font-bold sm:text-2xl'
  }
  return (
    <TagH className={headingMapClasses[TagH]}>
      <Link className="hover:text-slate-900/70 dark:hover:text-slate-100/70 transition" href={url}>
        {children}
      </Link>
    </TagH>
  );
}