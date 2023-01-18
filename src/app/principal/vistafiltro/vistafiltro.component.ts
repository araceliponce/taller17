import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-vistafiltro',
  templateUrl: './vistafiltro.component.html',
  styleUrls: ['./vistafiltro.component.css'],
})
export class VistafiltroComponent {
  // Recibir parametros de otros componentes

  // Simular un entorno de datos
  // datos = [
  //   { Nombre: 'Juan', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
  //   { Nombre: 'Arturo', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
  //   { Nombre: 'Maria', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
  //   { Nombre: 'Luis', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
  //   { Nombre: 'Jorge', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'},
  //   { Nombre: 'Carlos', Correo:'cdd@mail.com', Telefono:'8675434', Asunto:'sg', Mensaje:'hola', Pais: 'pe'}
  // ];
  constructor(
    private rutaActiva: ActivatedRoute,
    private dataService: DataService
  ) {}

  // Variable para recibir el parametro enviado desde vistafull
  cat = this.rutaActiva.snapshot.params['id'];

  // filteredData = this.datos.filter((item) => item.Pais === this.cat);

  dataArray: any[] = [];

  ngOnInit() {
    this.dataArray = this.dataService.filterData(this.cat);
  }
}