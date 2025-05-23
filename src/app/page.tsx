import { Container } from "@/components/Container"
import { FeaturedPost } from "@/components/FeaturedPost";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <FeaturedPost />

      <PostsList />

    </Container>
  );
}
