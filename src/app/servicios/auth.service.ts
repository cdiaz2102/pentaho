import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as firebase from 'firebase/app';
import "rxjs/add/operator/map";
@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient,
    public afAuth: AngularFireAuth
  ) { }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getUsuarios() {
    return this.http.get('https://miapirails.herokuapp.com/users');
  }


  loguearseJwt(email, password) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let bodies = { "auth": { "email": email, "password": password } }
    let options = { headers: headers };
    let laUrl = 'https://miapirails.herokuapp.com/user_token';

    console.log("loguearseJwt");
    return this.http.post(laUrl, bodies, options);
  }
}