import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  login = false;
  userInfo: any;

  constructor(private _auth: AuthService, private router: Router) {

    _auth.currentUser.subscribe(() => {

      if (_auth.currentUser.getValue() == null) {
        this.login = false;
      }
      else {
        this.login = true;
        this.userInfo = _auth.currentUser.getValue()
      };
    })
  }


  logout() {
    localStorage.removeItem("token");
    this._auth.currentUser.next(null)
    this.router.navigate(['/login'])

  }
  ngOnInit(): void { }

}