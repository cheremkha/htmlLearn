// let user = {
//   name: "Іван",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// console.log( name ); // Іван
// console.log( age ); // 30
// console.log( isAdmin ); // false


//===================================================


// task 2

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};


function topSalary (obj) {
    let result = [null, null];
    for (const [name, salary] of Object.entries(obj)) {
        if(salary > result[1])
            result = [name, salary]
    }
    return result[0];

}


console.log(topSalary({}))