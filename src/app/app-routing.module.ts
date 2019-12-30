import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  { path: 'card', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
