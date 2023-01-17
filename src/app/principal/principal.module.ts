import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { ActModule } from '../act/act.module';
import { VistafiltroComponent } from './vistafiltro/vistafiltro.component';
import { VistafullComponent } from './vistafull/vistafull.component';

//AQUI SE AGREGA PORQUE ESTAMOS TRABAJANDO CON ESTE MODULO, SINO EN EL APP.MODULE
//routes en app.routing.module.ts

@NgModule({
  declarations: [
    Menu1Component,
    HomeComponent,
    LoginComponent,
    VistafiltroComponent,
    VistafullComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterLinkActive //esto
  ],
  exports: [
    Menu1Component,
    HomeComponent,
    LoginComponent,
    VistafiltroComponent,
    VistafullComponent
  ]
})
export class PrincipalModule {

 }
