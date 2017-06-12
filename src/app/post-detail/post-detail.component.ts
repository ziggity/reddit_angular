import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post2: Post;

  constructor() { }

  ngOnInit() {
  }

}
