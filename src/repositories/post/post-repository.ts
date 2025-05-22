import { PostModel } from "@/models/post/post-model";

export interface PostRespository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}