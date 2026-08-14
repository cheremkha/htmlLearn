// task1 

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values) ); // Hare, Krishna, :-O


//=======================================================================


// // task2

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean( arr ) {
//     let uniqArea = new Map();

//     for (elem of arr) {
//         let newElem = elem
//             .toLowerCase()
//             .split("")
//             .sort()
//             .join('');

//         uniqArea.set(newElem, elem);
//     }
//     return Array.from(uniqArea.values());
// }

// console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


//==================================================================//


// task3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(keys);

// Помилка: keys.push -- це не функція
keys.push("more");

console.log(keys);