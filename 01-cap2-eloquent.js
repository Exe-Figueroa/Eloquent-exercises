/**
 * Ciclo de un triángulo
  Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
  #
  ##
  ###
  ####
  #####
  ######
  #######
 */
//Resolución
let triangle = '#';
for (let i = 0; i < 7; i++) {
  console.log(triangle);
  triangle += '#';
}

/**FizzBuzz
  Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.
  Cuando tengas eso funcionando, modifica tu programa para imprimir " FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).
  (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
  */
//Resolución

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 !== 0) {
    console.log('fizz');
  }else if(i % 5 == 0 && i % 3 !== 0){
    console.log('buzz');
  }else if(i % 5 == 0 && i % 3 == 0) {
    console.log('Fizz Buzz');
  }else{
    console.log(i);
  };
}

/**Tablero de ajedrez
  Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.
  Pasar este string a console.log debería mostrar algo como esto:
  #### ####
  #### ####
  #### ####
  #### #### 
 */
//Resolución
function tablero(fila, col) {
  let mensaje = '';
  for (let i = 1; i <= fila; i++) {
    for (let j = 0; j <=col; j++) {
      if (j == col) {
        mensaje = mensaje + '\n';
      }else{
        mensaje = mensaje + '#';
      }
    }
  }
  console.log(mensaje);
};

tablero(4, 4);
