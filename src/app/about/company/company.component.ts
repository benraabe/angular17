// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit{

  // http = inject(HttpClient);

  private postService = inject(PostService);
  posts: any = [];

  ngOnInit(): void {
    this.loadPosts();
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
        this.posts = posts;
        console.log("Posts: ", posts);

      },
      error: (err: any) => {
        console.log("Error: ", err);
      },
    });
  }


}
