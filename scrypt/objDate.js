//task 1
// const date = new Date(2012, 1, 20, 3, 12);
// console.log(date)




// //task 2
//   //NO FACKIN INTRESTING)))
// function getWeekDay(date) {
//     const dayOfWeek = date.getDay();
//     if (dayOfWeek === 0) {
//         return ("НД")
//     } else if (dayOfWeek === 1) {
//         return ("ПН")
//     } else if (dayOfWeek === 2) {
//         return ("ВТ")
//     } else if (dayOfWeek === 3) {
//         return ("СР")
//     } else if (dayOfWeek === 4) {
//         return ("ЧТ")
//     } else if (dayOfWeek === 5) {
//         return ("ПТ")
//     } else if (dayOfWeek === 6) {
//         return ("СБ")
//     }
// }

// let date = new Date(2012, 0, 3);  // 3 січня 2012
// console.log( getWeekDay(date) );      



// // BUT THIS RIGHT 

// function getWeekDay(date) {
//   let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 січня 2014
// alert( getWeekDay(date) ); // ПТ

// task 3                    


// let date = new Date(2012, 0, 3);  // 3 січня 2012

// function getLocalDay(date) {
//   if (date.getDay() === 0) {
//     return 7
//   } else {
//     return date.getDay()
//   }
// }

// console.log( getLocalDay(date) );       // вівторок, слід показати 2



// task 4

let date = new Date(2015, 0, 2);

function getDateAgo(date, dayAgo) {
  let resultDate = new Date(+date);
  resultDate.setDate(date.getDate() - dayAgo);
  return resultDate.getDate();
}

console.log( getDateAgo(date, 1) ); // 1, (1 січня 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 січня 2014)