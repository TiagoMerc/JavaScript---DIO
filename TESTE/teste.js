// Comentário de linha

/*

 Comentário de mais de uma linha
*/

/* Declaração da variável */
console.log("Hello worldddd!");

function returnEventValues(array) {
  let evenNums = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      console.log(`${array[i]} não é par!`)
    }
  }
  console.log("os números pares são:", evenNums);
}

/* Criando array */
let array = [1, 2, 4, 5, 7, 8];

/* Chamando variável */
returnEventValues(array);
