import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NewsFeedService } from '../../service/news-feed.service';

@Component({
  selector: 'manage-news-feed',
  templateUrl: './manage-news-feed.component.html',
  styleUrls: ['./manage-news-feed.component.css']
})
export class ManageNewsFeedComponent implements OnInit, OnChanges {
  @Input() newsFeed:string = "";
  valid: boolean = false;
  constructor( private newsFeedService: NewsFeedService ) { }

  ngOnInit() {
  }

  createNewsFeed(){
    if(this.valid){
      this.newsFeedService.create(this.newsFeed);
      this.valid = false;
      this.newsFeed = "";
    }
  }

  ngOnChanges(){
  }

  isValid(){
    if(this.newsFeed != ""){
      this.valid = true;
    }
    else{
      this.valid = false;
    }
  }

}
