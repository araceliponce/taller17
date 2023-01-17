import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private otroFormBuilder: FormBuilder){}
 
  otroRegistroForm = this.otroFormBuilder.group({
    nombre: ['', { validators: [Validators.required]}],
    email: ['',Validators.required],
    telefono: ['',Validators.pattern('[0-9]{9}')],
    asunto: ['',Validators.required],
    mensaje: ['',Validators.maxLength(100)],
    pais: ['',Validators.required]

  
  })


  //generar un metodo get para cada campo del formulario

  get nombre(){ return this.otroRegistroForm.get('nombre'); }
  get email(){ return this.otroRegistroForm.get('email'); }
  get telefono(){ return this.otroRegistroForm.get('telefono'); }
  get asunto(){ return this.otroRegistroForm.get('asunto'); }
  get mensaje(){ return this.otroRegistroForm.get('mensaje'); }
  get pais(){ return this.otroRegistroForm.get('pais'); }

  //generar el metodo on submit para guardar los datos del formulario dentro un array

  datos = new Array;
  mostrarmensaje = false;

  //al pulsar el boton de tipo submit que haya en el form
  onSubmit(){

    // si es invalido (o si es !valid), return
    if(this.otroRegistroForm.invalid){
      console.log('registro no valido');
      return;
    }

    this.mostrarmensaje = true;
    this.datos.push(
      {
        'Nombre': this.otroRegistroForm.get('nombres')?.value,
        'Email': this.otroRegistroForm.get('email')?.value,
        'Teléfono': this.otroRegistroForm.get('telefono')?.value,
        'Asunto': this.otroRegistroForm.get('asunto')?.value,
        'Mensaje': this.otroRegistroForm.get('mensaje')?.value,
        'País': this.otroRegistroForm.get('pais')?.value
      }
    )

    console.log(this.datos);

  }
  
}
