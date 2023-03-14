import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson2 } from './person2.model';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',  //template de url, que seria el html, aqui podria poner directamente el codigo html si usara el componente: "template"  y encierro el codigo entre ´´ estos caracteres. Esto se recomienda cuand es html muy corto, para omitir archivos.
  styleUrls: ['./person2.component.css']// lo mismo con los estilos, este no es obligatorio.
})
export class Person2Component implements OnInit {

  @Input() name : string = "";
  @Input() lastName : string = "";
  @Input() age : number = 0;

  @Output() print = new EventEmitter<IPerson2>();//aqui teniams entre los signos <> la palabra any, que hacia referencia a que cualquier tipo era su entrada. Pero ahora le decimos que tome como referencia la interfaz Person2 y ahi vienen todos los tipos de datos que puede recibir o ejecutar este o cualquier otra funcion ESG. 
  
  constructor() { }

  ngOnInit() {
  }

  public printFunction(): void {
    this.print.emit ({
      name : this.name,
      lastName : this.lastName,
      age : this.age,
    }) //mando un json para que lo emita al ejecutarse esta funcion.

  } //aqui el public menciona que podemos usar la funcion en el html, si es private no es posible usarla alla. Tambien para hacer el codigo mas limpio le decimos que tipo de valor retorna la funcion, en este caso no retorna un valor, sino que hace un proceso que lo pasa al componente, entonces es un void. 
}