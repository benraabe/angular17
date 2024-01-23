import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getPosts, getPostsFailure, getPostsSuccess } from "./post.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { PostService } from "../services/post.service";


@Injectable()
export class PostEffects {

  private postService = inject(PostService);
  private actions$ = inject(Actions);

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(() => this.postService.getPosts().pipe(
        map(posts => getPostsSuccess({ posts })),
        catchError(error =>
          of(getPostsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}