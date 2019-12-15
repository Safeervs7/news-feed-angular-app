import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'manage-news-feed',
  templateUrl: './manage-news-feed.component.html',
  styleUrls: ['./manage-news-feed.component.css']
})
export class ManageNewsFeedComponent implements OnInit, OnChanges {
  @Input() newsFeed:string = "";
  valid: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  createNewsFeed(){
    console.log("createNewsFeed", this.newsFeed, this.valid);
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
