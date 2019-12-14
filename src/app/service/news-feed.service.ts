import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  newsFeeds:string[];
  constructor() {
  }

  getNewsFeeds(){
    this.newsFeeds = ['card1', 'card2', 'card3',]
    return this.newsFeeds;
  }
}
