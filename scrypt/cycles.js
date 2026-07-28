// for(let i = 2; i <= 10; i+=2){
//     console.log(i)
// }


// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++;
// }




// let result;
// do {
//     result = +prompt("input number: ")
// } while (result <= 100 && result);




// for (let i = 2; i <= number; i++) {
//     for (let j = 2; j <= number; j++) {

//        if(i % j == 0){
//         ++sum
//        }         
//     }
//   if (sum == 1){
//     console.log(i);
// }
//     sum = 0;
// }

const number = 10;

nextPrime:
for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++){
        if (i % j == 0){
            continue nextPrime;
        } 
    }
    console.log(i);
}
