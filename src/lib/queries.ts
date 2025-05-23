import { postRespository } from "@/repositories/post/json-post-repository"
import { cache } from "react";

export const findAllPublicPosts = cache( async () => await postRespository.findAllPublic());
