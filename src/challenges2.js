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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
