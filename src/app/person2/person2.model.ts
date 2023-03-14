export interface IPerson2 { //como buenas practicas, en el nombre de la interfaz hay que poner al inicio la letra I de interfaz, y en el nombre del archivo nombrarlo [NOMBRE].model.ts .
  name: string,
  lastName: string,
  age?: number, //aqui le digo al poner el signo ? q no es obligatorio este tipo.

}//esta es una interfaz es lo mismo q en java o c#. te restringe el camino de variables que puedes tener en un objeto.
//Esto hace mas limpio los codigos. aqui vamos a poner que TIPOS DE DATOS debe tener esta interfaz person2