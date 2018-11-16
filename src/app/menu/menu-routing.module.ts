import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { NoticiasPage } from '../noticias/noticias.page';
import { FavoritosPage } from '../favoritos/favoritos.page';
import { HomePage } from '../home/home.page';

const routes : Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        outlet: 'menucontent',
        component: HomePage
      },
      {
        path: 'noticias',
        outlet: 'menucontent',
        component: NoticiasPage
      },
      {
        path: 'favoritos',
        outlet: 'menucontent',
        component: FavoritosPage
      }
    ]  
  },
  {
    path:'',
    redirectTo: '/menu/(menucontent:noticias)'
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
