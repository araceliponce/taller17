import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vistafull',
  templateUrl: './vistafull.component.html',
  styleUrls: ['./vistafull.component.css']
})
export class VistafullComponent {

  //un atributo con un valor determinado

  // dato='peru'; //AQUI DATO

  arreglo = ['peru','chile','uruguay', 'argentina','brasil']



  // importa la base de datos de su padre
@Input() datos_de_padre= [];
//tanto los datos del padre como los datos que se reciben aqui pueden tener el mismo nombre. aqui esta igualado a un array vacio
//ya en el html del c-padre lo igualas al texto del componente padre : <app-c-hijo1 [atributodec-hijo1]="atributodepadre"></app-c-hijo1>






}
