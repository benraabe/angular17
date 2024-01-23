import { PostStateI } from "./post-state";

export interface AppStateI {
  posts: PostStateI;
  counter: number;
}