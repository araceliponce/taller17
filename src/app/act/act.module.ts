import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActMenuComponent } from './act-menu/act-menu.component';
import { ActPeruComponent } from './act-peru/act-peru.component';
import { AppRoutingModule } from '../app-routing.module';
import { ActChileComponent } from './act-chile/act-chile.component';
import { ActUruguayComponent } from './act-uruguay/act-uruguay.component';



@NgModule({
  declarations: [
    ActMenuComponent,
    ActPeruComponent,
    ActChileComponent,
    ActUruguayComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule //en el contenedor de
  ],
  exports:[
    ActMenuComponent,
    ActPeruComponent,
    ActChileComponent,
    ActUruguayComponent
  ]
})
export class ActModule { }
