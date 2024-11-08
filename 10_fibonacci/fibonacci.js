const fibonacci = function(countArg) {
    let count;

    if (typeof n !== 'number'){
        count = parseInt(countArg);
    } else{
        count = countArg;
    }
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count < 0) return "OOPS";
    

    let a = 0;
    let b = 1;

    for (let i = 2; i <= count; i++){
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
