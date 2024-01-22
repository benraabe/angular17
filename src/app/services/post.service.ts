import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetail } from '../interfaces/post-detail';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);

  constructor() { }

  getPosts(): Observable<PostDetail[]> {
    return this.http.get<PostDetail[]>(BASE_URL);
  }
}
