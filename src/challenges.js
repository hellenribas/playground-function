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
let maiorNum = arrayNumber[0];
for (let index = 0; index < arrayNumber.length; index += 1) {
  let num = arrayNumber[index]
  if ( num > maiorNum) {
       maiorNum = num      
  }
}
for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
  if (maiorNum === arrayNumber[index2]) {
    cont += 1;
  }
}
  return cont
}
console.log(highestCount([0, 4, 4, 4, 2, 2, 2, 2]));

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
function encode(words) {
  let wordarray = words.split('')
  for (index = 0; index < wordarray.length; index += 1) {
    if (wordarray[index] === 'a') {
      wordarray[index] = 1;
    } else if (wordarray[index] === 'e') {
      wordarray[index] = 2;
    } else if (wordarray[index] === 'i') {
      wordarray[index] = 3;
    } else if (wordarray[index] === 'o') {
      wordarray[index] = 4;
    } else if (wordarray[index] === 'u') {
      wordarray[index] = 5;
    } 
  }
  let string = wordarray.join('');
  return string;
}
console.log(encode("hi there!"));

function decode(word2) {
  let wordNum = word2.split('')
  for (index = 0; index < wordNum.length; index += 1) {
    if (wordNum[index] === '1') {
      wordNum[index] = 'a';
    } else if (wordNum[index] === '2') {
      wordNum[index] = 'e';
    } else if (wordNum[index] === '3') {
      wordNum[index] = 'i';
    } else if (wordNum[index] === '4') {
      wordNum[index] = 'o';
    } else if (wordNum[index] === '5') {
      wordNum[index] = 'u';
    } 
  }
  let num = wordNum.join('');
  return num;
}
console.log(decode("h3 th2r2!"));

function listadetech (tech, name) {
  let obj = [];
  for ( index = 0; index < tech.length; index += 1) {
    obj.push({});
  }
  for (let key of tech) {
     obj.push[key]
  }
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
