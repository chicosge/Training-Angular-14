import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  
  constructor(){

  }

  //Arrow functions

//Se utilizan para minimizar el codigo a utilizar. en este tipo de funciones se puede omitir ciertas cosas para eficientar el codigo, por ejemplo:

//const getName = (name: string) => { return "hi" + name;}

//Tambien podemos omitir las llaves y la palabra return si solo es una unica ejecucion. 
//const getName = (name: string) => "hi" + name;

//Cuando no tenemos parametros de entrada
//const getName = () => "hello";

//Tambien podemos omitir parentesis del parametro de entrada
//const mult = num => num *2;

  private mult(num) {
    return num;
  }
}
