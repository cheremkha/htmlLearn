// // task 1

// function camelize (str) {
//     return str
//         .split("-")
//         .map(
//             (elem, index) => {
//                 if(index > 0)
//                     return elem.at().toUpperCase()+elem.slice(1);
//                 return elem;
//             }
//         )
//         .join('')

// }


// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');

//==============================================================================================//

// // task 2 wrong

// let arr = [5, 3, 8, 1];

// function filterRange(arr, less, big) {
//     let result = arr.map(
//         (elem) => {
//             if(elem >= less && elem <= big) return elem;
//     });
//     console.log(result);
//     return result ? result : arr;
// }

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (відфільтровані значення)

// console.log( arr ); // 5,3,8,1 (не змінюється)

//==============================================================================================//

// // task 2 right

// let arr = [5, 3, 8, 1];

// function filterRange(arr, less, big) {
//     return arr.filter(
//         (elem) => (elem >= less && elem <= big) );
// }

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (відфільтровані значення)

// console.log( arr ); // 5,3,8,1 (не змінюється)


// //==============================================================================================//

// // task 3

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, less, big) {
//      for (let index = 0; index < arr.length; index++) {
//         if(!(less <= arr[index] && big >= arr[index])) {
//             console.log(arr[index])
//             arr.splice(index, 1)
//             --index;
//         }
//     }
// }

// filterRangeInPlace(arr, 2, 5); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

// console.log( arr ); //[3,1]


// //==============================================================================================//


// // task 4


// let arr = [5, 2, 1, -10, 8];

// // arr.sort( (a,b) => {
// //         if (a > b) return -1; // якщо перше значення більше за друге
// //         if (a == b) return 0; // якщо значення рівні
// //         if (a < b) return 1; 
// // })


// arr.sort( (a,b) => b-a);
// console.log( arr ); // 8, 5, 2, 1, -10




// //==============================================================================================//


// // // task 5


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// console.log( arr ); // HTML, JavaScript, CSS (без змін)
// console.log( sorted ); // CSS, HTML, JavaScript


// //==============================================================================================//


// // // task 6
//   //first half
// function Calculator() {
//     this.calculate = (str) => {
//         let arr = str.split(' ')
//         if (arr[1] === '+')
//             return +arr[0] + +arr[2];
//         else if (arr[1] === '-')
//             return +arr[0] - +arr[2];
//     }
// }

// let calc = new Calculator;
// console.log( calc.calculate("3 - 7") );


// // // task 6
//   //second half
// function Calculator() {
//     this.addMethod = (name, func) => {
//         this[name] = func;
//     }

//     this.calculate = (str) => {
//         let argument = str.split(' ')
//         return this[argument[1]](+argument[0], +argument[2]);
//     }
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("+", (a, b) => a + b);
// powerCalc.addMethod("-", (a, b) => a - b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.calculate("2 / 3"));
// console.log(powerCalc.calculate("2 * 3"));
// console.log(powerCalc.calculate("2 ** 3"));
// console.log(powerCalc.calculate("34 - 12"));
// console.log(powerCalc.calculate("12 + 34"));



//==========================================================================//

// //task 8 

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map( item => ({
//         fullName: (item.name + " " + item.surname),
//         id: item.id,
// }))
// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // Іван Іванко


// ================================================================//

// task previos


// function unique(array) {
//         let result = [array[0]];
//         for (let i = 0; i < array.length; i++) {
//                 for (let j = 0; j < result.length; j++) {
//                         if(result[j] !== array[i])
//                                 result.push(array[i]);
                        
//                 }
//         }
//         return result;
// }


// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// console.log( unique(strings) ); // Привіт, Світ, :-O





// function unique(arr) {
//        let result = []
//        arr.slice().reverse().forEach( (item, index) => {
//                 if(!(arr.includes(item, index+1)))
//                        result.push(item);
//        })
//        return result.reverse();
// }

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// console.log( unique(strings) ); // Привіт, Світ, :-O



// ================================================= //


// last 


 let users = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];


function groupById(objArr) {
  return objArr.reduce( (acamulator, objelem) => {
    acamulator[objelem.id] = objelem;
    return acamulator;
}, {})
}

let usersById = groupById(users);
console.log(usersById)



