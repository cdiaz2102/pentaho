import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { NoticiasPageModule } from '../noticias/noticias.module';
import { FavoritosPageModule } from '../favoritos/favoritos.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    NoticiasPageModule,
    FavoritosPageModule,
    HomePageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
