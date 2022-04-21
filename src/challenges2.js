// Desafio 10
function techList(tecnologia, name) {
  console.log('Chamou');
  let obj = [];
  let tech = '';
  let obj2 = {};
  let newList = tecnologia.sort();
  for (let index = 0; index < newList.length; index += 1) {
    tech = newList[index];
    obj2 = {
      tech,
      name,
    };
    obj.push(obj2);
  }
  if (obj.length > 0) {
    return obj;
  }
  return 'Vazio!';
}

console.log(techList(
  ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
  'Lucas',
));

// Desafio 11
function generatePhoneNumber(arrayN) {
  let ddd = 0;
  let phone = [];
  let numberphone = 0;
  let numrep = 0;
  let cont = 0;
  if (arrayN.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayN.length; index += 1) {
    cont = 0;
    numrep = arrayN[index];
    if (arrayN[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (arrayN[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let elem = 0; elem < arrayN.length; elem += 1) {
      if (arrayN[elem] === numrep) {
        cont += 1;
        if (cont >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  for (let index = 0; index < 1; index += 1) {
    ddd = `(${arrayN[index]}${arrayN[index + 1]})` + ' ';
  }
  for (let index = 2; index < 7; index += 1) {
    phone.push(arrayN[index]);
  }
  phone.push('-');
  for (let index = 7; index < arrayN.length; index += 1) {
    phone.push(arrayN[index]);
  }
  let phone2 = phone.join('');
  numberphone = ddd + phone2;
  return numberphone;
}

console.log(generatePhoneNumber([1, 5, 7, 4, -1, 5, 1, 8, 9, 3, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) || lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}
console.log(triangleCheck(2, 3, 4));

// Desafio 13
function hydrate(stringBar) {
  let dig = /\d+/g;
  let num = stringBar.match(dig);
  // console.log(numTrue);
  let agua = 0;
  if (num.length === 1) {
    agua = '1';
    return `${agua} copo de água`;
  } if (num.length > 1) {
    for (let index = 0; index < num.length; index += 1) {
      let numTrue = parseInt(num[index], 10);
      agua += numTrue;
    }
    let aguaS = agua.toString();
    return `${aguaS} copos de água`;
  }
}
console.log(hydrate('1 cachaça, 2 vinhos'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
