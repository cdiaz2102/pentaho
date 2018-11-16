import { Component, OnInit } from '@angular/core';
import { NoticiasService  } from "../servicios/noticias.service";
import { FavoritosService } from "../servicios/favoritos.service";
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  
  articulos:any[];

  constructor(public noticias: NoticiasService, public favoritosService: FavoritosService) { }
  
  ngOnInit() {
    this.noticias.getNews().subscribe((res)=>{ 
      this.presentarNoticias(res)
    });
  }

  presentarNoticias(respuesta){
    this.articulos = respuesta["articles"];
    console.log(this.articulos);
  }

  guardarFavoritos(elem){
    console.log("guardar favorito:" + elem);
    this.favoritosService.guadarFavorito(elem);
  }

}
