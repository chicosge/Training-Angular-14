import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  
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
