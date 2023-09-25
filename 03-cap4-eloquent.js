/**
 * Ejercicios
* ?La suma de un rango
* ?La introducción de este libro aludía a lo siguiente como una buena forma de calcular la suma de un rango de números:
* ? console.log(suma(rango(1, 10)));
* ?Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta (e in- cluyendo) final.
* ?Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.
* ?Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado para cuando con- struyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior. La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].
 */

function range(start, end) {
  const newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  };
  return newArray;
}

const array = range(1, 3);
function arraySum(params) {
  return params.reduce((acumulator, curretValue) => acumulator + curretValue, 0);
  // let acumulator = 0;
  // for (let i = 0; i < params.length; i++) {
  //   acumulator += params[i]
  // }
  // return acumulator;
}
console.log(arraySum(array));

function rangeTwo(start, end, step) {
  if ((start > end && step > 0) || (start < end && step < 0)) {
    return 'loco nada que ver lo que estas haciendo'
  }
  const newArray = [];
  if (start < end) {
    for (start; start <= end; step ? start += step : start++) {
      newArray.push(start);
    };
  } else {
    for (start; start >= end; step ? start += step : start--) {
      newArray.push(start);
    }
  }
  return newArray;
}
console.log(rangeTwo(10, 1, -2));


/**
 * Revirtiendo un array
*? Los arrays tienen un método reverse que cambia al array invirtiendo el or- den en que aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos ele- mentos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.
*? Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior, qué variante esperas que sea útil en más situaciones? Cuál corre más rápido?
 */

function revertArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
    array.pop();
  }

  for (let i = 0; i < newArray.length; i++) {
    array.push(newArray[i]);
  }
}

const arrayTwo = [1, 2, 3, 4, 5, 6];
console.log('array antes de ser mutado', arrayTwo);
revertArray(arrayTwo);
console.log('array después de ser mutado', arrayTwo);

/**
 * Una lista
*?Los objetos, como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos. Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos, con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente.
*? let lista = {
*?   valor: 1,
*?   resto: {
*?     valor: 2,
*?     resto: {
*?valor: 3,
*?resto: null }
*?} };
*? Algo bueno de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1, resto: lista} (con lista refiriéndose a la vinculación definida anteriormente), ambos son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo una lista válida de tres elementos.
*? Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una lista y un número y retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.
*? Si aún no lo has hecho, también escribe una versión recursiva de posicion.

 */

const arr = [1, 2, 3, 4, 5];
const list = {};

function arrayList(arr) {
  for (let i = arr.length; i > 0; i--) {
    list.value = i
    if (i === arr.length) {
      list.rest = {...list, rest: null};
    } else {
      list.rest = { ...list }
    }
  };
  console.log(list);
};


arrayList(arr);