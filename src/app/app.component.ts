import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PostService ]
})

export class AppComponent implements OnInit {
  masterPostList: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts()
      .then(masterPostList => this.masterPostList = masterPostList)
  }
}
