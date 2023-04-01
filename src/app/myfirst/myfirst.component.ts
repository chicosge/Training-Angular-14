import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.css'],
})
export class MyfirstComponent implements OnInit, OnChanges {
  //implements es heredar de una interfaz alguna funcionalidad, en este caso estamos jalando OnInit, onchanges,

  @Input() name!: string; //recordemos, con el ? identifica que si no existe la inicialice. de lo contrario manda error, es eso o ponerle un valor inicial. o con un ! deja pasar el error.
  @Input() lastName: string ="Servin"; 
  
  public middleName : string ="";
  public generalData: string="ready2";

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    //Se debe de instanciar y aqui dentro esta el codigo q se ejecuta una vez que se inicio el componente. Obvio despues del codigo del constructor, porque ya dijimos que el codigo del constructor se ejecuta al inicio de todo. OJO onINIT solo se ejecuta una vez al cargar el componente.
    console.log('onInit');

    //recmendacion consultas a backend que necesitara el componente, se deberian hacer en ngoninit, asi te aseguras de que estan listas para usarse porque el componente ya se renderizo o se cargo. Se pueden hacer en el constructor, pero no se recomienda. Solo entra una vez a ese metodo.
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges'); //segun jerarquia de ciclo de vida, este es el primero, pero no aparece en consola porque se necesita trabajar con inputs, o con algo que genere cambios en el componente. en e lmomento que exista algo q reciba el componente, se ejecuta lo de aqui y en consola veremos que aparece antes de oninit, pero despues de constructor. Entra muchas veces a este metodo
    console.log('es primer cambio?: ', changes['name'].isFirstChange());
    console.log('cambios:', changes);

    if(changes["lastName"].currentValue=="Servilleta"){
      console.log("Es servilleta");
    }
    else{
      console.log("Es servitoalla");
    }
  }
  ngDoCheck() :void {
    console.log("Do-Check");
    this.generalData =this.name + " - " + this.lastName + " - " + this.middleName; //cualquier cambio que hace el TS o el DOOM  el docheck lo registra. es importante esto para que no ejecutemos recursiones o procesos complejos aqui, pues cada cambio siempre entra docheck.
  }
}
