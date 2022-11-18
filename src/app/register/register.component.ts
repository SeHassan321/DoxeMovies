import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService,private _Router: Router) { }
  

  registerForm = new FormGroup({

    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(50)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9@&]{3,8}$')])

  })

  errors = "";
  submitRegesteration(registerinfo: any) {
    // console.log(registerinfo.value)
    this._AuthService.registerForm(registerinfo.value).subscribe((response) => {
      console.log(response.message);
      if ( response.message =="success"){
        //tmam'
        this._Router.navigate(['/login'])
      }
      else{
        //error
        this.errors=response.errors.email.message     
      }
    })
  }


  ngOnInit(): void {

  }

}
