import { createSelector } from "@ngrx/store";
import { AppStateI } from "../types/interfaces/app-state";


export const selectFeature = (state: AppStateI) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);