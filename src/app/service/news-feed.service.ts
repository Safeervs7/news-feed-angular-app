import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  newsFeeds:string[];
  constructor() {
    this.newsFeeds = ['asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk', 'asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk asldlkfsafdk', 'card3', 'card3']
  }

  getNewsFeeds(){
    return this.newsFeeds;
  }

  create(newsFeed:string){
    this.newsFeeds.push(newsFeed);
  }
}
