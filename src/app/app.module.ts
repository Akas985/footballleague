import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth/reducer';
import { AuthEffects } from './auth/effect';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth/auth.service';
import { TableComponentComponent } from './table-component/table-component/table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    // EffectsModule.forRoot([]),
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects])
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

