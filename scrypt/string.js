// function checkSpam (str) {
//     let noSensetiveToRegist = str.toLowerCase();
//     if(noSensetiveToRegist.includes("xxx") || noSensetiveToRegist.includes("viagra"))
//         return true;
//     return false;
// }


// console.log( checkSpam('buy ViAgRA now') == true);
// console.log( checkSpam('free xxxxx') == true);
// console.log( checkSpam("innocent rabbit") == false);



// function truncate (str, maxlength) {
//     if(str.length > maxlength)
//         return (str.slice(0, maxlength) + "…").length
//     return str;
// }

// console.log(truncate("Що я хотів би розповісти на цю тему:", 20) == "Що я хотів би розпо…");

// console.log(truncate("Всім привіт!", 20) == "Всім привіт!");


// console.log(truncate("Що я хотів би розповісти на цю тему:", 20));


function extractCurrencyValue(str) {
    if(!str) return str;
    let withoutFirstSymbol = str.slice(1);
    return parseInt(withoutFirstSymbol);
}

console.log( extractCurrencyValue('$120') === 120 ); // true