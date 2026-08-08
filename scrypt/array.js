// let styles = ['Jazz', 'Blues']

// styles.push("Rock-n-Roll")

// function medianInstedOnClassic(arr) {
//     const median = Math.trunc( arr.length / 2);
//     arr[median] = "Classic";
// }

// medianInstedOnClassic(styles);
// console.log(styles.shift());

// styles.unshift("Rap", "Reggae");

// console.log(styles)


// function sumInput () {
//     let arr = [];
//     do {
//         let input = prompt("Input the number: ");
//         if(!isFinite(input) || input == null || input === '') break;
//         arr.push(+input);
        
//     } while (true);
//     let result = 0;
//     for (const elem of arr) {
//         result += elem;
//     }
//     return result;
// }

// console.log(sumInput());


// last task in array


function getMaxSubSum (arr) {
    let checkPlasNumber = null;
    let copyArr = [];
    for (const element of arr) {
         copyArr.push(element);
         if(element <= 0) continue;
         checkPlasNumber = 1;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
        }
    }
}

arr = [1, -2, 3, 4, -9, 6];

console.log(getMaxSubSum(arr) );
console.log( getMaxSubSum([-1, -2, -3, -9, -11]))