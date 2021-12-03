// Desafio 10
function techList(tecnologia, name) {
    console.log('Chamou');
    let obj = [];
    let tech = "";
    let obj2 = {};
    let newList = tecnologia.sort()
      for ( index = 0; index < newList.length; index += 1) {
        tech = newList[index];
        obj2 = {tech, name};
        obj.push(obj2);
       }
       if (obj.length > 0) {
         return obj
      }else {
       return 'Vazio!';
    } 
    }
    
   console.log(techList(
    ["React", "Jest", "HTML", "CSS", "JavaScript"],
    "Lucas"));
  


// Desafio 11
function generatePhoneNumber(arrayN) {
  let ddd = 0;
  let phone = [];
  let numberphone = 0;
  if (arrayN.length === 11) {
    for (index = 0; index < 1; index += 1) {
       ddd = '(' + arrayN[index] + arrayN[index + 1] + ')' + ' ';
  }
    for (index = 2; index < 7; index += 1) {
      phone.push(arrayN[index]);
    }
    phone.push("-");
    for (index = 7; index < arrayN.length; index += 1) {
      phone.push(arrayN[index]);

  }
  phone.join();
  numberphone = ddd + phone;
} 
return numberphone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) || lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
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
    return agua + ' copo de água'; 
  }
  else if (num.length > 1) {
    for (let index = 0; index < num.length; index += 1) {
    let numTrue = parseInt(num[index]);
      agua = agua + numTrue;
    }
    let aguaS = agua.toString();
    return aguaS + ' copos de água';
  }
  }
  console.log(hydrate('1 cachaça, 2 vinhos'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
