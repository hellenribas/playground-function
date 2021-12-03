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
function hydrate(lineA, lineB, lineC) {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
