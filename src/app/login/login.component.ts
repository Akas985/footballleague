// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms'


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   hide: boolean = false;

//   constructor(private formBuilder: FormBuilder) {
//   }

//   ngOnInit() {
//   }
  

//   loginForm: FormGroup = this.formBuilder.group({
//     user: ['', [Validators.required]],
//     password: ['', [Validators.required, Validators.minLength(6)]]
//   })


//   onSubmit() {
//     if (this.loginForm.invalid) {
//       return;
//   }
//     console.log(this.loginForm.value);
//   }

// }

// login.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, loginFailure } from '../auth/action';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { of } from 'rxjs';


@Component({
   selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  hide: boolean = false;

  constructor(private store: Store, private router: Router, private formBuilder: FormBuilder, public authService:AuthService) {}

    loginForm: FormGroup = this.formBuilder.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit() {
  
    
       this.store.dispatch(login({ username: this.username, password: this.password }));

   
    

   
  
  
    
 
  }

}
