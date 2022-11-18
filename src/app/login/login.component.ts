import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }


  loginForm = new FormGroup({


    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9@&]{3,8}$')])

  })

  errors = "";
  submitRegesteration(logininfo: any) {

    // console.log(logininfo.value)

    this._AuthService.loginForm(logininfo.value).subscribe((response: any) => {
      // console.log(response)
      if (response.message == "success") {

        this._Router.navigate(['/home'])

        localStorage.setItem('token', response.token)
        this._AuthService.saveCurrentUser()

      }
      else {
        this.errors = response.message
      }

    })


  }


  ngOnInit(): void {

  }

}
