// Arreglos en JavaScript

const numeros = [10, 20, 30, 40, 50];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
const mezclado = ['Hola', 20, true, null, false, undefined, { nombre: 'Juan', trabajo: 'Programador' }, [1, 2, 3]];

console.log(numeros);
console.log(meses);
console.log(mezclado);

console.table(numeros);
console.table(meses);
console.table(mezclado);

// Acceder a los valores de un arreglo

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros.length);
console.log(mezclado[7].length);

let i = 0;

for (i; i < meses.length; i++) {
    console.log(meses[i]);
}

// Agregar elementos a un arreglo
numeros[5] = 60;

console.log(numeros);

const junio = 'Junio';
const julio = 'Julio';


// Agregar al final del arreglo
meses.push(junio);

console.log(meses);

meses.push(julio);

console.log(meses);

// Agregar al inicio del arreglo
meses.unshift('Mes 0');

console.log(meses);

// Eliminar elementos de un arreglo
meses.pop();

console.log(meses);

// Eliminar del inicio del arreglo
meses.shift();

console.log(meses);

// Quitar un rango
meses.splice(2, 1);

console.log(meses);

// Revertir un arreglo

meses.reverse();

console.log(meses);

// Unir un arreglo con otro

// let arreglo1 = [1, 2, 3];
// let arreglo2 = [9, 8, 7];

const arreglo0 = [1,2]

let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2));

// Ordenar un arreglo

const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];

const [Platano, Manzana, fruta3, fruta4, fruta5] = frutas;

console.log(Platano);
console.log(Manzana);
console.log(fruta3);
console.log(fruta4);
console.log(fruta5);

frutas.sort();

console.log(frutas);

// Ordenar numeros

// arreglo1 = [3, 9, 1, 8, 2, 10, 20, 5, 4, 7, 6];

// arreglo1.sort(function(x, y) {
//     return x - y;
// });

// console.log(arreglo1);

let resultado = [...arreglo0, ...arreglo1, arreglo2];


console.log(resultado);

// Destructuring de arreglos
const [primero, segundo, ...tercero] = arreglo1;

console.log(primero);
console.log(segundo);
console.log(tercero);

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' },
    { id: 4, producto: 'Guitarra' },
    { id: 5, producto: 'Piano' }
]

const [producto1, producto2, producto3] = carrito;

console.log(producto1);
console.log(producto2); 
console.log(producto3);

//recorrer un arreglo con destructuring

const [, , , producto4] = carrito;

console.log(producto4);

// Spread Operator con arreglos

const arreglo3 = [1, 2, 3, 4, 5],
    arreglo4 = [6, 7, 8, 9, 10];

const arreglo5 = [...arreglo3, ...arreglo4];

// console.log(arreglo5);

//Recorrer un arreglo de la forma tradicional y mostrar su contenido
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

carrito.forEach(cart => {
    console.log(cart);
});

const prod = carrito.map(cart => {
    return cart.producto;
});

console.log(prod);