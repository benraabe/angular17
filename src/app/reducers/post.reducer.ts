import { createReducer, on } from "@ngrx/store";
import { getPosts, getPostsFailure, getPostsSuccess } from "../store/post.action";
import { PostStateI } from "../interfaces/post-state";


export const inistialState : PostStateI = {
  isLoading: false,
  posts: [],
  error: null
};


export const postReducer = createReducer(
  inistialState,
  on(getPosts, state => ({ ...state, isLoading: true })),
  on(getPostsSuccess, (state, action) => ({ ...state, isLoading: false, posts: action.posts })),
  on(getPostsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error})),
);
