import { createAction, props } from '@ngrx/store';
import { PostDetailI } from '../interfaces/post-detail';

export const getPosts = createAction('[Posts Component] Get Posts');
export const getPostsSuccess = createAction('[Posts Component] Get Posts success', props<{ posts: PostDetailI[] }>());
export const getPostsFailure = createAction('[Posts Component] Get Posts failure', props<{ error: string }>());