import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
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

(async () => {
  const repository = new DrizzlePostRepository();
  const postsPublic = await repository.findAllPublic();
  // postsPublic.forEach((post) => console.log(post.slug, post.published));

  const post = await repository.findBySlugPublic('fundamentos-do-basquete-para-iniciantes');
  console.log(post);
}

)()