const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);

valores[4] = 10;

console.log(valores);

console.log(valores.length);

valores.push(3.14, { id: 3 }, false, null, 'teste');
console.log(valores);
console.log(valores.length);

// Remove último
console.log(valores.pop());

// Apaga índice específico
delete valores[0];
console.log(valores);

console.log(typeof valores);