// let salaries = {
//   "Іван": 100,
//   "Петро": 300,
//   "Марія": 250
// };

// function sumSalaries(obj) {
//     let sum = 0;
//     for (const salary of Object.values(obj)) {
//         sum += salary;
//     }
//     return sum;
// }

// console.log( sumSalaries(salaries) ); // 650

//=========================================================================
//task2


let user = {
  name: 'Іван',
  age: 30
};

function count( obj ) {
    return Object.keys(obj).length;
}

console.log( count(user) ); // 2
