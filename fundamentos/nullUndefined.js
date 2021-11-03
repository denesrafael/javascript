let valor;
console.log(valor);

valor = null; // ausência de valor - não há referência na memória

console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.89;
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);