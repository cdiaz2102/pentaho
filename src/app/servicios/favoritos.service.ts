import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos:any[];
  constructor() { 
  	if(this.favoritos == undefined){
  		this.favoritos=[];
  		//this.consultarFavoritos();
  	}
  }

  getFavoritos(){
  	return this.favoritos;
  }
  consultarFavoritos(){
  	if(this.favoritos != undefined && this.favoritos.length > 0){
  		console.log("leyendo favoritos del array");
  	}else{
  		console.log("leyendo favoritos del localstorage");
  		this.favoritos = JSON.parse(localStorage["favoritos"]);
	
  	}

  	console.log("consultando favoritos");
  	return this.favoritos;
  }

  guadarFavorito(elem){
  	console.log(elem.title);
  	this.favoritos.push(elem);
  	localStorage.setItem("favoritos",  JSON.stringify(this.favoritos));

  }
}
