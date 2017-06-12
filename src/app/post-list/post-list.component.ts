import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post.model'
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ PostService ]
})

export class PostListComponent implements OnInit {
  masterPostList: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts()
      .then(masterPostList => this.masterPostList = masterPostList)
  }

  selectedPost = null;
  selectPost(clickedPost: Post) {
    this.selectedPost = clickedPost;
  }

  edit(post: Post) {
    this.router.navigate(['editPost', post.id])
  }
}
