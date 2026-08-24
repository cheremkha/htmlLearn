// let user = {
//   name: "Іван Іванов",
//   age: 35
// };

// let jsnStr = JSON.stringify(user);
// console.log(jsnStr);

// let newObj = JSON.parse(jsnStr);
// console.log(newObj.name);


// task 2

let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
  place: room
};

// циклічне посилання
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if(value == meetup && key != '')
    return undefined;
  return value;
}));
