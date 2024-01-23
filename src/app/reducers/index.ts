import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { postReducer } from './post.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  posts: postReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
