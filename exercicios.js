/* Function that prints your name.
Function that doubles a number.
Function that squares a number.
Write a function that receives an array and returns how many elements it has.
Write a function that receives 3 parameters returns the total sum.
Write a function that checks if a certain element exists in an array.
Write a function that checks the index of a certail element in an array.
Write a function that doubles each number inside an array and returns a new array.
Write a function that filters out only the odd numbers from an array.
 Write a function that receives an array and an element, and adds the element to the end.
 Write a function that removes the last element of an array and returns it.
 Write a function that removes the first element of an array and returns it.
 Write a function that adds an element at the start of an array.
 Write a function that removes one element at a given index.
 Write a function that inserts an element in the middle of an array.
 Write a function that checks if a word starts with "A".
 Write a function that checks if a word ends with "o".
 Write a function that finds the index of the first number greater than 50.
 Write a function that finds the last number that is even.
 Write a function that receives an array of names and a letter, and returns only the names that start with that letter.
 */

function printname(nome) {
  return console.log("O nome é " + nome);
}

function double(x) {
  x2 = x * 2;
  return console.log(x + " * 2 = " + x2);
}

function square(x) {
  x2 = x * x;
  return console.log(x + "² = " + x2);
}

function countarray(vetor) {
  count = vetor.length;
  return console.log("Contagem de elementos: " + count);
}

function sum3(x, y, z) {
  total = x + y + z;
  return console.log(x + " + " + y + " + " + z + " = " + total);
}

function checkarray(vetor, elementochecado) {
  if (vetor.includes(elementochecado)) {
    return console.log("O vetor tem o elemento " + elementochecado);
  } else return console.log("O vetor não tem o elemento " + elementochecado);
}

function checkindex(vetor, elementochecado) {
  if (vetor.includes(elementochecado)) {
    return console.log(
      "Index(" + elementochecado + "): " + vetor.indexOf(elementochecado)
    );
  } else
    return console.log(
      "O elemento " +
        elementochecado +
        "não está contido em " +
        vetor +
        " e portanto não tem index."
    );
}

function arrayDoubleEach(vetor) {
  duplicar = vetor.map((n) => n * 2);
  return console.log("Vetor duplicado: " + duplicar);
}

function arrayOddNumbers(vetor) {
  primos = vetor.filter((n) => n % 2 != 0);
  return console.log("Números ímpares do vetor: " + primos);
}

function arrayPushToEnd(vetor, elemento) {
  vetor.push(elemento);
  return console.log("Elemento adicionado: " + elemento + " [" + vetor + "]");
}

function arrayRemoveEnd(vetor) {
  fim = vetor.indexOf(vetor.length);
  remover = vetor.pop(vetor.includes(fim));
  return console.log("Elemento removido: " + remover + " [" + vetor + "]");
}

function arrayRemoveStart(vetor) {
  inicio = vetor.indexOf(0);
  remover = vetor.shift(vetor.includes(inicio));
  return console.log("Elemento removido: " + remover + " [" + vetor + "]");
}

function arrayAddStart(vetor, elemento) {
  adicionar = vetor.unshift(elemento);
  return console.log("Elemento adicionado: " + elemento + " [" + vetor + "]");
}

function arrayRemoveIndex(vetor, index) {
  remover = vetor.splice(index, 1);
  return console.log("Elemento removido: " + remover + " [" + vetor + "]");
}

function arrayAddMiddle(vetor, elemento) {
  meio = Math.ceil(vetor.length / 2);
  vetor.splice(meio, 0, elemento);
  return console.log("Elemento adicionado: " + elemento + " [" + vetor + "]");
}

function checkIfWordStartsWithA(palavra) {
  if (palavra.includes("A")) {
    return console.log("A palavra " + palavra + " contém a letra A");
  } else return console.log("A palavra " + palavra + " não contém a letra A");
}

/* Testando as funções */

nome = "Raphael";

printname(nome);
double(3);
square(4);
sum3(3, 5, 7);

vetorteste = [1, 2, 3, 4, 5, 6];

countarray(vetorteste);
checkarray(vetorteste, 6);
checkindex(vetorteste, 6);
arrayDoubleEach(vetorteste);
arrayOddNumbers(vetorteste);
arrayPushToEnd(vetorteste, 7);
arrayRemoveEnd(vetorteste);
arrayRemoveStart(vetorteste);
arrayAddStart(vetorteste, 1);
arrayRemoveIndex(vetorteste, 3);
arrayAddMiddle(vetorteste, 4);

palavra = "Paralelepípedo";

checkIfWordStartsWithA(palavra);
