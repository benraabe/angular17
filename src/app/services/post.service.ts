import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { PostDetailI } from '../interfaces/post-detail';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);

  constructor() { }

  getPosts(): Observable<PostDetailI[]> {
    return this.http.get<PostDetailI[]>(BASE_URL).pipe(delay(2000));
  }
}
