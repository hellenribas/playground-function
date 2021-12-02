// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  let conversor = string.split(' ');
  return conversor;
}

// Desafio 4
function concatName(array) {
  let element = (array[array.length - 1]);
  let virgula = ',';
  let element2 = (array[0]);
  let concat = element + virgula + element2;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontoTies = ties;
  let pontoWin = wins * 3;
  let result = pontoTies + pontoWin;
  return result;
}
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
