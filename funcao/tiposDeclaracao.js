
// acesso a funcao em qualquer linha
console.log(soma(2, 3));

// function declaration
function soma(x, y) {
    return x + y
}

// funcition expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 2));

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 2));

