import { Component, OnInit } from '@angular/core';

import { NewsFeedService } from '../service/news-feed.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  newsFeeds:string[];
  constructor(private newsFeedService: NewsFeedService) {   }

  ngOnInit() {
    this.newsFeeds = this.newsFeedService.getNewsFeeds();
  }

}
