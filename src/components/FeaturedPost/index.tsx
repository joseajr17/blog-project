import { Heading } from "../Heading";
import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";

export function FeaturedPost() {
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 group sm:grid-cols-2">
      <PostImage
        linkProps={{
          href: '#',
        }}
        imageProps={{
          src: '/images/bryen_2.png', width: 1200, height: 720, alt: 'Alt da Img', priority: true,
        }}
      />

      <PostSummary createdAt="2025-04-08T00:24:38.616Z" postLink="post/rotina-matinal-de-pessoas-altamente-eficazes" title="Rotina matinal de pessoas altamente eficazes" excerpt="O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO." />

    </section>
  );
}