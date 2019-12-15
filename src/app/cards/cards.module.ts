import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ManageNewsFeedComponent } from './manage-news-feed/manage-news-feed.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    ManageNewsFeedComponent
  ],
  exports: [
    CardComponent,
    ManageNewsFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class CardsModule { }
