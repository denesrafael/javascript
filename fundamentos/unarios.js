let num1 = 1
let num2 = 2

// Pós fixado
num1++
console.log(num1)

// Pré fixado
--num1
console.log(num1)

console.log(++num1 === num2--) // decrementa num2 após a comparação
console.log(num1 === num2)