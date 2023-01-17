import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vistafiltro',
  templateUrl: './vistafiltro.component.html',
  styleUrls: ['./vistafiltro.component.css']
})
export class VistafiltroComponent {

  // Recibir parametros de otros componentes
constructor(private rutaActiva: ActivatedRoute){}

// Simular un entorno de datos
datos = [
{Nombre: "Juan", Apellido: "Perez", Categoria: 1},
{Nombre: "Arturo", Apellido: "Perez", Categoria: 1},
{Nombre: "Maria", Apellido: "Perez", Categoria: 2},
{Nombre: "Luis", Apellido: "Perez", Categoria: 1},
{Nombre: "Jorge", Apellido: "Perez", Categoria: 2},
{Nombre: "Carlos", Apellido: "Perez", Categoria: 1},
]

// Variable para recibir el parametro enviado desde vistafull
cat=0;

// Evento ngOnInit -> Cargar pagina
// Al cargar la pagina se recibira el valor enviado desde vistafull

//cat va a ser igual al param :id (: significa parametro)
ngOnInit(){
this.cat = this.rutaActiva.snapshot.params['id'];
}
}
