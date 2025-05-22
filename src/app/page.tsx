import { Container } from "@/components/Container"
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { PostImage } from "@/components/PostImage";
import { PostsList } from "@/components/PostsList";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 group sm:grid-cols-2">

        <PostImage
          linkProps={{
            href: '#',
          }}
          imageProps={{
            src: '/images/bryen_2.png', width: 1200, height: 720, alt: 'Alt da Img', priority: true,
          }}
        />

        <div className="flex flex-col gap-4 justify-center">
          <time dateTime='2025-05-22' className="text-slate-600 dark:text-slate-400 text-sm">22/05/2025 10:00</time>
          <Heading url="#" as="h1">Numquam nisi aut natus quod obcaecati?</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi aut natus quod obcaecati? Vero nulla voluptate recusandae similique nam iste consequatur soluta, maxime accusantium architecto tempore amet rem ipsa.
          </p>
        </div>
      </section>

      <PostsList />

    </Container>
  );
}
