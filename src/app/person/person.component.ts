import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';//se dan de alta salidas y entradas aqui ESG

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  //INPUT son entradas a nuestro componente

@Input ("nombretest") name: string = ""; //Si quiero que en el html se muestre otro valor para la variable (otro nombre)  solo lo pongo dentro del parentesis del input, y en el html donde mando esta entrada la voy a nombrar como el nombre que punto en los parentesis del input. Pero internamente en el component seguire usando el nombre de variable name tipo string ESG.


@Input () lastName : string = "";
@Input () age: number = 0;

//Los output son salidas de nuestro componente. Generalmente los componentes botan eventos. 

@Output () print = new EventEmitter(); //estamos indicando que nuestra salida sera un evento. 
  constructor() { }

  ngOnInit() {
  }

  funPrint (event:any){
    this.print.emit("Hola hola cara culo! desde PersonComponent.") //esta es la funcion que se ejecuta cuando se cacha el evento del boton del componente person. Y despues esto es lo que mandaremos al componente que esta mandando llamar a este componente Person, en este caso es app component ESG.
  }

}