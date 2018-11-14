import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    public authService: AuthService,
    public router: Router,
    //public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/noticias']);
      }).catch(err => console.log(err.message));
  }
}






