import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  nom = ""
  pass = ""
  isDisabled = true;
  // inputisRed = false;

/*   checkNom(){
    if(this.nom.trim()!=''){
      // this.inputisRed=false;
    }
    else{
      alert('nombre vacio')
      // this.inputisRed=true;
      // console.log (this.inputisRed)
    }

    // return this.inputisRed
  } */

updateBtn(){
  if(this.nom.trim()!='' &&this.pass.trim()!=''){
    //String.trim() removes the whitespace characters from both ends of a string.
    // console.log('no esta vacio', this.nom,this.nom.length)
    this.isDisabled=false;
  } else{
    this.isDisabled=true;
  }

  console.log(this.isDisabled)

  return this.isDisabled;
}

}
