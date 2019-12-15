import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HeaderModule } from './header/header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NewsFeedService } from './service/news-feed.service';
import { CardsModule } from './cards/cards.module';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    CardsModule
  ],
  exports: [
  ],
  providers: [NewsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
