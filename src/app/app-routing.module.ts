import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActChileComponent } from './act/act-chile/act-chile.component';
import { ActMenuComponent } from './act/act-menu/act-menu.component';
import { ActPeruComponent } from './act/act-peru/act-peru.component';
import { ActUruguayComponent } from './act/act-uruguay/act-uruguay.component';
import { ContactComponent } from './principal/contact/contact.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { VistafiltroComponent } from './principal/vistafiltro/vistafiltro.component';
import { VistafullComponent } from './principal/vistafull/vistafull.component';

//aqui estamos combinando los paths del reto y de la actividad 
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contact', component: ContactComponent},

  {path:'vistafull', component: VistafullComponent},
  {path:'vistafull/:id/vistafiltro', component: VistafiltroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
