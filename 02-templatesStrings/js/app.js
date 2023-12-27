const nombre = 'Juan'
const nombre2 = "John"

const apellido = "lópez"
const apellido2 = 'Doe'

console.log('nombre: ', nombre);
console.log('nombre2:', nombre2);

console.log('nombre completo', nombre  +' '+  apellido)
console.log('nombre completo 2' , `${nombre} ${apellido}`);

const nombreCompleto = `${nombre} ${apellido}`
// Busqued de coincidencias en un texto
console.log('nombre completo 3', nombreCompleto.indexOf("lópez"));
console.log('nombre completo 3', nombreCompleto.includes("John"));


const rol = "admin"

//Verificar que un texto este incluido
console.log('rol', rol.includes("administrador"));


//elimina espacios de los textos
const lorem = '                             lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam!                     '
console.log('lorem', lorem.length);

console.log('lorem', lorem.trim().length);
console.log('lorem', lorem.trimStart().length);
console.log('lorem', lorem.trimEnd().length);
console.log('lorem', lorem.trimStart().trimEnd().length);

//reemplazar texto

const nombre3 = "john andrade"

console.log('nombre3', nombre3.replace("john", "Juan"), nombre3.replace("john andrade", "Juan Mejia"));

// slices extraer texto de un string

const nombre4 = "Juan andrade"

console.log('nombre4', nombre4.slice(5, 12));
console.log('nombre4', nombre4.length - 7);
console.log('nombre4', nombre4.slice(nombre4.length - 7));

// substring extraer texto de un string

const nombre5 = "Juan andrade"

console.log('nombre5', nombre5.substring(0, 4));
console.log('nombre5', nombre5.substring(nombre5.length - 7));

// ChartAt extraer un caracter de un string

const nombre6 = "Juan andrade"

console.log('nombre6', nombre6.charAt(0));


//Repeat de textos

const texto = "Hola".repeat(3)
const numero = '9.7'.repeat(2.2);
console.log('texto', texto);
console.log('numero', numero);

//split separar un string

const marca = "HP Lenovo Asus Apple Acer"

console.log('marca', marca.split(" ")[2]);

// lowerCase y upperCase

const nombre7 = "Juan andrade"

const numeros = 123456789
const numeros2 = "123456789"

console.log('nombre7', nombre7.toLowerCase());
console.log('nombre7', nombre7.toUpperCase());
console.log('numeros', typeof numeros);
console.log('numeros', typeof numeros.toString());
console.log('numeros2', typeof numeros2);
console.log('numeros2', typeof parseInt(numeros2));