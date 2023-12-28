// Operadores de comparación <, >, <=, >=, ==, ===, !=, !==

const numero1 = 20;
const numero2 = "30";
const numero3 = 30;
const numero4 = 30;

console.log('Mayor que', numero1 > numero3 );
console.log('Menor que', numero1 < numero3 );

console.log('Mayor o igual que', numero3 >= numero4 );
console.log('Menor o igual que', numero3 <= numero4 );

console.log('Igual que', numero3 == numero2 );
// operado de comparacion stricto
console.log('Igual que strict', numero3 === numero2 );

console.log('Diferente que', numero3 != numero2 );
// operado de diferencia stricto
console.log('Diferente que strict', numero3 !== numero2 );