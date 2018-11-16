import { Component, OnInit } from '@angular/core';
import { NoticiasService  } from "../servicios/noticias.service";
//import { PhonegapLocalNotification, LocalNotificationOptions } from "@ionic-native/phonegap-local-notification";


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})

export class NoticiasPage implements OnInit {
  
  articulos:NoticiasService[];
  constructor(public noticias: NoticiasService, ) { }

  doRefresh(refresher) {
    let rrff = refresher;
    console.log('Begin async operation', rrff);
    this.noticias.getNews().subscribe((res) => {
      this.presentarNoticias(res)
      rrff.detail.complete();
      //this.notificarRefresco()
    });
    //this.cargarNoticias();
    
    // setTimeout(() => {
    // }, 5000);
    console.log('Async operation has ended');
  }
  
  ngOnInit() {
    this.cargarNoticias()
  }

  cargarNoticias(){
    this.noticias.getNews().subscribe((res) => {
      this.presentarNoticias(res)
    });
  }

  presentarNoticias(respuesta) {
    this.articulos = respuesta["articles"];
    console.log(this.articulos);
  }

  

  notificarRefresco(){
    // if ("Notification" in window) {
    //   Notification.requestPermission(function (permission) {
    //     // If the user accepts, let’s create a notification
    //     if (permission === 'granted') {
    //       var notificacion = new Notification ("My title", {
    //           tag: "Acción", 
    //           body: "Refrescado" 
    //       }); 
    //       notificacion.onshow  = function() { console.log('show'); };
    //       notificacion.onclose = function() { console.log('close'); };
    //       notificacion.onclick = function() { console.log('click'); };
    //     }
    //   });
    // }
  }
}
