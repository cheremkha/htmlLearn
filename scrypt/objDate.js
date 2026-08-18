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



// // task 4

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, dayAgo) {
//   let resultDate = new Date(+date);
//   resultDate.setDate(date.getDate() - dayAgo);
//   return resultDate.getDate();
// }

// console.log( getDateAgo(date, 1) ); // 1, (1 січня 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 січня 2014)




// // task 5
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate()
// }

// console.log(getLastDayOfMonth(2012, 1))



// // task 6

// function getSecondsToday() {
//   let date = new Date();
//   let dateBegin = new Date(date);
//   dateBegin.setHours(0,0,0)
//   return (date - dateBegin)/1000
// }
// console.log(getSecondsToday())



// // task 7 
// function getSecondsToTomorrow() {
//   let dateToday = new Date();
//   let dateTomorow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
//   return (dateTomorow - dateToday)/1000
// }


// console.log(getSecondsToTomorrow())




// task 8


function formatDate(date) {
  const dateNow = new Date();
  const result = dateNow - date;
  if (result < 1e3 ) {
    return "Now";
  } else if (result / 1e3 < 60) {
    return `${result / 1e3} sec was`
  } else if (result / 1e3 < 60*60) {
    return `${(result / 1e3)/60} m was`
  } 
    // додати нулі до однозначних днів/місяців/годин/хвилин
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // отримати останні 2 цифри кожного компоненту

  // з’єднати компоненти в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо зараз"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"

// вчорашня дата, як 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );