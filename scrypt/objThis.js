// let user = {
//   name: "Іван",
//   age: 30
// };

// user.sayHi = () => console.log("Привіт!");

// user.sayHi(); 



// const calculator = {
//     read() {
//         this.a = +prompt("a? : ")
//         this.b = +prompt("b? : ")
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
},
showStep: function() { // показує поточний крок
    alert( this.step );
    return this;
  }
};

ladder
    .down()