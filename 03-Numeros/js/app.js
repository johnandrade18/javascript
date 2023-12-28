const numero1 = 20;
const numero2 = "20";

console.log('numero1', numero1);
console.log('numero2', numero2);

//Numeros enteros

const numero3 = 30;
const numero4 = 20;
const numero5 = 20.20;
const numero6 = .102030;
const numero7 = -20;

console.log('numero3', numero3);
console.log('numero4', numero4);
console.log('numero5', numero5);
console.log('numero6', numero6);
console.log('numero7', numero7);

const numeros8  = new Number(70);

console.log('numero8', numeros8);

//Operaciones
//suma
const sumas = numero1 + numero3;
//resta
const resta = numero1 - numero3;
//multiplicacion
const multiplicacion = numero1 * numero3;
//division
const division = numero1 / numero3;
//modulo
const modulo = numero1 % numero3;

console.log('sumas', sumas);
console.log('resta', resta);
console.log('multiplicacion', multiplicacion);
console.log('division', division);
console.log('modulo', modulo);

//Math
let resultado;

//PI
resultado = Math.PI;

//Redondear
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(3.5);
//Raiz cuadrada
resultado = Math.sqrt(200);
//Absoluto
resultado = Math.abs(-500);
//Potencia
resultado = Math.pow(3, 4);
//Minimo
resultado = Math.min(3, 5, 1, 8, 2, 10);
//Maximo
resultado = Math.max(3, 5, 1, 8, 2, 10);
//Aleatorio
resultado = Math.random();
//Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30);


console.log('resultado', resultado);

resultado = 30 + 50 * 50 ;

console.log('resultado', resultado);

resultado = (30 + 50) * 50 ;

console.log('resultado', resultado);

resultado = (30+20+30+45+55) * 0.30;

console.log('resultado', resultado);



let contador = 5;

contador = contador + 1; // incrementador de un digito
contador = contador += 1; // incrementador que acumula los valores
contador++; // incrementador de un digito

contador = contador - 1; // decrementador de un digito
contador = contador -= 1; // decrementador que acumula los valores
contador--; // decrementador de un digito

++contador; // incrementador de un digito
--contador; // decrementador de un digito


console.log('contador', contador);

//Convertir de string a numero y viceversa
resultado = 1234567890; 

console.log('resultado', resultado.toString());

resultado = "1234567890";

console.log('resultado', parseInt(resultado));