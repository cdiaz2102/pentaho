import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath='';

  pages = [

    {
      title: 'Noticias',
      url: '/menu/(menucontent:noticias)'
    },
    {
      title: 'Favoritos',
      url: '/menu/(menucontent:favoritos)'
    }

  ]

  constructor(private  router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  hacerllamada(){
    alert("ddddd")
  }
  ngOnInit() {
  }

}
