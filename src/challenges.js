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
  let virgula = ', ';
  let element2 = (array[0]);
  let concat = element + virgula + element2;
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontoTies = ties;
  let pontoWin = wins * 3;
  let result = pontoTies + pontoWin;
  return result;
}
// Desafio 6
function highestCount(arrayNumber) {
  let cont = 0;
  let contElem = 0;
  for(index = 0; index < arrayNumber.length; index+=1) {
    if (arrayNumber[index + 1] === arrayNumber[index]) {
      
    }
  }
  for (elem = 0; elem < arrayNumber.length; elem += 1) {
    if (arrayNumber[cont] === arrayNumber[elem]) {
      contElem = contElem + 1;
    }
  }
    return contElem;
  }
console.log(highestCount([0, 4, 4, 4, 2, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = Math.abs(mouse - cat1);
  let distcat2 = Math.abs(mouse - cat2);
  if (distcat1 > distcat2) {
     return 'cat2'
  } else if(distcat2 > distcat1) {
    return 'cat1'
  } else {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(1, 4, 2));

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayString = [];
  for (indice = 0; indice < arrayNum.length; indice += 1) {
    if ((arrayNum[indice]) % 3 === 0 && (arrayNum[indice]) % 5 === 0) {
      arrayString.push("fizzBuzz");
    } else if ((arrayNum[indice]) % 5 === 0) {
      arrayString.push("buzz");
    } else if ((arrayNum[indice]) % 3 === 0) {
      arrayString.push("fizz");
    } else {
      arrayString.push("bug!")
    }
      
    }
    return arrayString
  }
  let tes = [2, 15, 7, 9, 45]
  console.log(fizzBuzz(tes));


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
