import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule, Route, Router} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsPage } from './cards.page';
import {UsersCardsComponent} from "../users-cards/users-cards.component";
import {UserCardComponent} from "../user-card/user-card.component";

const routes: Routes = [
  {
    path: '',
    component: CardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsPage, UsersCardsComponent, UserCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CardsPageModule {}
