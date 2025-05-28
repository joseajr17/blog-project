import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post)
      throw new Error('Post not found');

    return post;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) => and(eq(posts.published, true), eq(posts.slug, slug),),
    });

    if (!post)
      throw new Error('Post not found');

    return post;
  }

}

// (async () => {
//   const repository = new DrizzlePostRepository();
// const posts = await repository.findAll();
// posts.forEach((post) => console.log(post.slug, post.published));
// const post = await repository.findById('1a2b3c4d-1234-5678-9101-abcdef123456');
// console.log(post);
// const postsPublic = await repository.findAllPublic();
// postsPublic.forEach((post) => console.log(post.slug, post.published));
// const post = await repository.findBySlugPublic('fundamentos-do-basquete-para-iniciantes');
// console.log(post);
// }
// )()