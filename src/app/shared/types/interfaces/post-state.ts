import { PostDetailI } from "./post-detail";

export interface PostStateI {
  isLoading: boolean;
  posts: PostDetailI[];
  error: string | null;
}
