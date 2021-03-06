import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from "./components/components";

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
