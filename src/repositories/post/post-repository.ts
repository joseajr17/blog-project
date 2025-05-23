import { PostModel } from "@/models/post/post-model";

export interface PostRespository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}