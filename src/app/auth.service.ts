import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {

    if (localStorage.getItem("token") != null) 
    {
      this.saveCurrentUser()
      
    }
  }

  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token: any = localStorage.getItem("token")
    let data: any = jwtDecode(token)
    this.currentUser.next(data)
    // console.log(this.currentUser) 
  }


  registerForm(formData: any): Observable<any> {

    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData)
  }
  loginForm(formData: any): Observable<any> {

    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formData)
  }
}

