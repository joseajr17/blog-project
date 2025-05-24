import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');


export class JsonPostRepository implements PostRepository {

  private async readFromDisk(): Promise<PostModel[]> {
    const json = await readFile(JSON_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(json);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);

    if (!post)
      throw new Error('Post not found');

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post)
      notFound();

    return post;
  }

}

export const postRepository: PostRepository = new JsonPostRepository();

