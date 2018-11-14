import { Component, OnInit } from '@angular/core';
import { NoticiasService  } from "../servicios/noticias.service";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  
  articulos:any[];

  constructor(public noticias: NoticiasService) { }
  
  ngOnInit() {
    this.noticias.getNews().subscribe((res)=>{ 
      this.presentarNoticias(res)
    });
  }

  presentarNoticias(respuesta){
    this.articulos = respuesta["articles"];
    console.log(this.articulos);
  }

}
