let user = {
  name: "Іван Іванов",
  age: 35
};

let jsnStr = JSON.stringify(user);
console.log(jsnStr);

let newObj = JSON.parse(jsnStr);
console.log(newObj.name);