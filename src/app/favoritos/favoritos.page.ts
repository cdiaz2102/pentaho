import { Component, OnInit } from '@angular/core';
import { FavoritosService } from "../servicios/favoritos.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos:any[];
  constructor(public servicioFavoritos:FavoritosService) { 
  	this.favoritos=[];
  	
  }


  ngOnInit() {
  	this.servicioFavoritos.consultarFavoritos();
  	this.favoritos=this.servicioFavoritos.getFavoritos();
  	console.log("se encontraron " + this.favoritos.length +" favoritos");
  	
  }

}
