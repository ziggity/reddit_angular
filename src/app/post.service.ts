import { Injectable } from '@angular/core';

import { POSTS } from './existing-posts';

@Injectable()
export class PostService {
  getPosts() {
    return Promise.resolve(POSTS);
  }
}
