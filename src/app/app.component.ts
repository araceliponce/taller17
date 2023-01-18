import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'taller16';

  /* datos_recibidos= new Array; //de contact


  RecibirDatos(d:any){
  // this.datos_recibidos = d

  // this.datos_recibidos +=d;
  this.datos_recibidos.push(this.datos);

  console.log(d, this.datos_recibidos) */
  // return this.datos_recibidos //Repite los primeros datos enviados
  } //tampoco pude usar Array


 /*  datos_recibidos: any[] = [];
  RecibirDatos() {
    this.datos_recibidos.push(this.dato);
    this.dato++;
  } */

  // constructor(private rutaActiva: ActivatedRoute) {}

// Simular un entorno de datos
// datos = [
// { Nombre: 'Juan', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
// { Nombre: 'Arturo', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
// { Nombre: 'Maria', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
// { Nombre: 'Luis', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
// { Nombre: 'Jorge', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
// { Nombre: 'Carlos', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'}
// ];




function RecibirDatos() {
  throw new Error('Function not implemented.');
}

