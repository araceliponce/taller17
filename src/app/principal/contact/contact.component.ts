import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


//para dataaservice
  constructor(private dataService: DataService) { }
  
  


datos = [];
estudiante: any[] = [];
nombre: string = "";
correo: string = "";
telefono: string = "";
asunto: string = "";
mensaje: string = "";
pais: string = "";

insertarDatos() {

  let nuevoEstudiante = {
  Nombre: this.nombre,
  Correo: this.correo,
  Telefono: this.telefono,
  Asunto: this.asunto,
  Mensaje: this.mensaje,
  Pais: this.pais,

  };

  console.log(nuevoEstudiante);
  // this.estudiante.push(nuevoEstudiante);

  this.dataService.addData(nuevoEstudiante);
  // this.estudiante = { Name:'', Correo: '', Telefono: '' };

  this.nombre = "";
  this.correo = "";
  this.telefono = "";
  this.asunto = "";
  this.mensaje = "";
  this.pais = "";
  // console.log (this.estudiante) vacio

}

}






  
