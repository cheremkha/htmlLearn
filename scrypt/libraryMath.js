// function adding() {
//     const num1 = +prompt("Input the number one: ");
//     const num2 = +prompt("Input the number two: ");
//     return num1 + num2;

// }


// function readNumber() {
//     let num;

//     do {
//         num = prompt("Input the number: ", 0); 

//         if (num === '' || num === null) return null; 

//     } while (!isFinite(num));

//     return +num;
// }
// console.log(readNumber() );


// function random (min, max) {
//     return min + Math.random() * (max - min);
// }

// console.log(random(3,5));



// //не правильне рішення
// function randomInteger(min, max) {
//     return Math.round(min + Math.random() * (max - min));
// }


// for (let index = 0; index < 20; index++) {
    
//     console.log(randomInteger(3,5));
// }



function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}


for (let index = 0; index < 30; index++) {
    
    console.log(randomInteger(3,5));
}