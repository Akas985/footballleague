
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, loginFailure } from '../auth/action';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  someMethodThatDispatchesAnAction() {
    throw new Error('Method not implemented.');
  }
  username!: string;
  password!: string;
  hide: boolean = false;



  constructor(private store: Store, private router: Router, private formBuilder: FormBuilder, public authService: AuthService) { }

  loginForm: FormGroup = this.formBuilder.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })



  onSubmit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
    this.store.select(state => state).subscribe(data => {
      localStorage.setItem('UserData', JSON.stringify(data));


    });


  }

}
