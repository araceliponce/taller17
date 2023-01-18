import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataArray: any[] = [
    {
      Nombre: 'Carlos',
      Correo: 'cdd@mail.com',
      Telefono: '8675434',
      Asunto: 'sg',
      Mensaje: 'hola',
      Pais: 'peru',
    },
    {
      Nombre: 'Persona de chile',
      Correo: 'abc@mail.com',
      Telefono: '0000000',
      Asunto: 'sin asunto',
      Mensaje: 'adios',
      Pais: 'chile',
    },
  ];

  addData(data: any) {
    this.dataArray.push(data);
  }
  getData() {
    return this.dataArray;
  }
  filterData(pais: string) {
    return this.dataArray.filter(
      (data) => data['Pais'].toLowerCase() === pais.toLowerCase()
    );
  }
}