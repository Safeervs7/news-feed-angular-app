import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderModule } from './header/header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CardsModule } from './cards/cards.module';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';

import { NewsFeedService } from './service/news-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    CardsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    CardsModule,
    NgbModule
  ],
  exports: [
      
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [NewsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
