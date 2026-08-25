function sumTo(n) {
    return n == 1 ? n : n += sumTo(n-1)
}

function sumTo(n) {
    let sum = n;
    for (let i = 0; i < n; i++) {
        sum += i;       
    }
    return sum;
}



console.log(sumTo(100))


