import { Component } from '@angular/core';
import { IPerson2 } from './person2/person2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  auxFind1 = "cadenaa";
  apellido = "apellido";

  edad = [1,2,2,3,4,5,6].reduce((prev,acc,index) => prev+acc, 0);

  getPrint (event:any){
    console.log("hi ", event);
  }

  getPrint2 (event:IPerson2, personid?:any){ //puedo mandar muchos parametros, pero si alguno no es obligatorio solo lo indico poniendo el signo ? despues del nombre del parametro.
    console.log("Parent component: ", event);
    this.person2 = event;
  }

  public person2 : IPerson2;

  public example: string ="texto de ejemplo we";
  public a : number = 2;
  public b: number = 4;

  getText(event : any) : void{
    console.log("LastName: ", event);
  }

  imprimeName(name: any){
    console.log("nombre: ", name.value); //si no especifico que quiero imprimir, me traera todo el valor del elemento donde se encuentra la variable, pues como se menciona en el HTML se asigna a la variable todo lo del elemento donde esta declarada.
  }
  
  constructor(){
    console.log("esto del constructor es lo primero que se ejecuta");

    //metodos o funciones que trabajan sobre arreglos:

    //map. recorre un arreglo y realiza operaciones por cada elemento. Devuelve un arreglo. Se le puede pasar como parametro una funcion fleha.
    const auxMap = [1,2,3,4,5].map(num=> num*2);
    console.log("auxMap: ", auxMap);

     //Foreach. recorre un arreglo y realiza operaciones por cada elemento. se le pasa parametro en funcion fleha pero no devuelve algo, solo realiza operaciones.
     const auxForEach = [1,2,3,4,5].forEach(num => console.log(num * 2));
     console.log("auxForEach: ", auxForEach);

      //find. recorre un arreglo y busca lo que le pasamos, puede recibir funcion flecha, devuelve un valor.
    const auxFind = [1,2,3,4,5].find(num => num === 3);
    console.log("auxFind: ", auxFind);

     //findIndex. recorre un arreglo buscando un valor. si lo encuentra devuelve la posicion del arreglo donde esta ese valor.
     const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 3);
     console.log("auxFindIndex: ", auxFindIndex);

      //IndexOf. recorre un arreglo y nos devuelve la posicion del valor q buscamos
    const auxIndexOf = [1,2,3,4,5].indexOf(2);
    console.log("auxIndexOf: ", auxIndexOf);

     //filter. recorre un arreglo y nos devuelve un arreglo con los valores que cumplan lo que solicitamos en el parametro.
     const auxFilter = [1,2,3,4,5].filter(num => num %2 === 0);
     console.log("auxFilter: ", auxFilter);

      //join. recorre un arreglo y convierte en texto el arreglo. lo concatena con el caracter que le pasemos como parametro
    const auxJoin = [1,2,3,4,5].join("-.-");
    console.log("auxJoin: ", auxJoin);

     //split. le pasamos una cadena y la convierte en arreglo, separando cada valor por el parametro que le pasamos, ese seria el identificador para cortar la cadena.
     const auxSplit = "esta es la cadena a montar".split(" ");
     console.log("auxSplit: ", auxSplit);

     //Splice. Funcion en la que indicamos que elementos de un array queremos eliminar. La funcion o metodo recibe 2 parametros, el primero es el indice (donde se va a situal), el segundo parametro es cantidad de elementos a eliminar desde ese indice mencionado.

     const A = ["a","b","c","de","f"];
     console.log("Arreglo antes de editar: ", A);
     const auxSplice = A.splice(2,1); //a partir del elemento indice 2 voy a eliminar 1 elemento del arreglo.

     console.log("Nuevo arreglo: ",A);
     console.log("Elemento eliminado: ",auxSplice);

     //Reduce. Recorre un arreglo y realiza operaciones con los registros del arreglo mediante una funcion flecha. Tiene 3 parametros de entrada:
     //Acumulador, Valor actual, Indice (o valor inicial). Este ultimo es un parametro opcional.

     const B = [1,9,2,8,3,7,4];
     const auxReduce = B.reduce((acc,current,index) => acc+current * index ,3);
    console.log("auxReduce: ", auxReduce);

    // Operadores  JSON sobre objetos. 
    //Entries, keys y values. el primero te devuelve un arreglo de arreglos. el arreglo esta compuesto de arreglos, que son los pares de llave y valor.
    //keys devuelve un array con contenido de las llaves, o campos del objeto. el values te devuelve igual un arreglo pero con los valores de cada campo key.

    const objetComp = {
      id: 1,
      name: "Erick",
      lastName: "Servitoalla",
    };
    
    const auxEntries = Object.entries(objetComp);
    console.log("Entries: ", auxEntries);
    
    const auxKeys = Object.keys(objetComp);
    console.log("Keys: ", auxKeys);
    
    const auxValues = Object.values(objetComp);
    console.log("Values: ", auxValues);
    
    //Desestructuracion de JSON.

    const persona = {
      id: 1,
      name: "erik",
      country: {
        idCountry: "d1",
        ciudad: "mexico",
        CD: 1,
      }
    }

    const {country,id} = persona; //desestructuramos, estamos diciendo que en una constante llamada "country" vamos a grabar lo que el objeto tiene en el atributo country.
    console.log("Country: ", country, "\t ID:", id);


    //Operador Spread (propagacion) y REST. 
    
    const arr1 = [1,2,3,4,5];
    const auxSpread = [...arr1,6,7,8,9,10];
    console.log("Spread: ", auxSpread);
    this.getRest (1,2,"agua", 4);


    //Ejercicio sesion 4 sumar todas las edades de los objetos.

    const obj = {
      0: {
        id: 1,
        name: "Pedro",
        age: 25,
      },
      1: {
        id: 2,
        name: "Juan",
        age: 10,
      },
      2: {
        id: 3,
        name: "Jose",
        age: 2,
      },
      3: {
        id: 4,
        name: "Jonas",
        age: 11
      },
    };

    const resp = Object.values(obj).reduce((prev, actual) => prev + actual.age,0);
    console.log ("Suma de edades: ", resp);

    //ejercicio 2 sesion 4. Devolver un array, filtrar las personas mayores de 10 años. solo mostrar ID.
    //Resultado esperado: [1,4]

    const res = Object.values(obj).filter(num => num.age > 10).map(p =>p.id);
      console.log("Res: ", res);
    
  }

   getRest(...param: any[]){
    console.log("REST: ", param);
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
