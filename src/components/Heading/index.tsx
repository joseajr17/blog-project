type HeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
}

export function Heading({ children, url, as: TagH = 'h2' }: HeadingProps) {
  const headingMapClasses = {
    h1: 'text-2xl font-extrabold sm:text-4xl md:text-4xl',
    h2: 'text-xl font-extrabold sm:text-2xl md:text-3xl'
  }
  return (
    <TagH className={headingMapClasses[TagH]}>
      <a href={url}>
        {children}
      </a>
    </TagH>
  );
}