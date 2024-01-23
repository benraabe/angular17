// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { PostDetailI } from '../../../shared/types/interfaces/post-detail';
import { Store, select } from '@ngrx/store';
import { getPosts } from '../../../shared/store/post.action';
import { errorSelector, isLoadingSelector, postsSelector } from '../../../shared/store/post.selectors';
import { Observable } from 'rxjs';
import { AppStateI } from '../../../shared/types/interfaces/app-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit{



  // http = inject(HttpClient);
  private store = inject(Store<AppStateI>);
  private postService = inject(PostService);
  posts2: PostDetailI[] = [];
  isLoading$?: Observable<boolean>;
  error$?: Observable<string | null>;
  posts$?: Observable<PostDetailI[]>;

  constructor() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.posts$ = this.store.pipe(select(postsSelector))
  }


  ngOnInit(): void {
    this.loadPosts();
    this.store.dispatch(getPosts());
  }

  // fetchPost() {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10').subscribe(response => {
  //     console.log(response);
  //     this.posts = response;
  //   })
  // }

  // loadPosts() {
  //   this.postService.getPosts().subscribe(response => {
  //     console.log(response);
  //     this.posts = response;
  //   });
  // }


  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (posts: any)  => {
        this.posts2 = posts as PostDetailI[];
        console.log("Posts: ", posts);

      },
      error: (err: any) => {
        console.log("Error: ", err);
      },
    });
  }


}
