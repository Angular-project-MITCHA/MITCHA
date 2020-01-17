import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { BagsComponent } from './bags/bags.component';
import { UsersComponent } from './users/users.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { RegisterFormComponent } from './users/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JewelryComponent,
    BagsComponent,
    UsersComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
