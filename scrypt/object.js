// // task 1

// let schedule = {};

// function isEmpty() {
//   for (let key in schedule){
//     return false;
//   }
//   return true;
// }
// console.log( isEmpty(schedule) );

// schedule['8.30'] = "wake up";

// console.log( isEmpty(schedule) );


// task2

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }

// let sum = sumObj(salaries);

// function sumObj(obj) {
//   let result = 0;
//   for (let key in obj) result += obj[key]
//   return result;
// }

// console.log(sum);




//task 3 


// до виклику функції
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню", 
  34: "hello"
};
console.log(menu);

function multiplyNumeric(obj, num) {
  for (let key in obj) {
    console.log (typeof key);
  }
}

multiplyNumeric(menu, 2);

console.log(menu);

let user2 = {
  name: "ivan"
}
console.log(menu);

menu = user2;

console.log(menu === user2)

