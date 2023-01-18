import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { VistafiltroComponent } from './vistafiltro/vistafiltro.component';
import { VistafullComponent } from './vistafull/vistafull.component';
import { ContactComponent } from './contact/contact.component';

//AQUI SE AGREGA PORQUE ESTAMOS TRABAJANDO CON ESTE MODULO, SINO EN EL APP.MODULE
//routes en app.routing.module.ts

@NgModule({
  declarations: [
    Menu1Component,
    HomeComponent,
    LoginComponent,
    VistafiltroComponent,
    VistafullComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterLinkActive, //esto
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Menu1Component,
    HomeComponent,
    VistafiltroComponent,
    VistafullComponent,
    ContactComponent
  ]
})
export class PrincipalModule {

 }
