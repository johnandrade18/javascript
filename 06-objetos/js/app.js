//Arreglo de objetos
const vehiculos = [
  {
    marca: "Ford",
    modelo: "Fiesta",
    año: 2019,
    color: "Azul",
    cantidadPuertas: 5,
    cantidadPasajeros: 5,
    encendido: false,
    dimension: {
      alto: 1.5,
      largo: 4.5,
      ancho: 2,
    },
  },
  {
    marca: "Chevrolet",
    modelo: "Onyx",
    año: 2019,
    color: "Azul",
    cantidadPuertas: 5,
    cantidadPasajeros: 5,
    encendido: false,
    dimension: {
      alto: 1.5,
      largo: 4.5,
      ancho: 2,
    },
  },
];

//un Objeto es una coleccion de propiedades
const vehiculo = {
  marca: "Ford",
  modelo: "Fiesta",
  año: 2019,
  color: "Azul",
  cantidadPuertas: 5,
  cantidadPasajeros: 5,
  encendido: false,
  dimension: {
    alto: 1.5,
    largo: 4.5,
    ancho: 2,
  },
  accesorios: ["aire acondicionado", "frenos abs", "airbag"],
};

// console.log("vehiculo", vehiculo);
// console.log("vehiculo", typeof vehiculo);
// console.log("marca", vehiculo.marca);
// console.log("marca", vehiculo["marca"]);
// console.log("marca", vehiculo["dimension"].alto);
// console.log("marca", vehiculo["dimension"]["alto"]);

//agregar una propiedad

vehiculo.velocidadMaxima = 200;

// console.log("vehiculo", vehiculo);

//eliminar una propiedad

delete vehiculo.cantidadPuertas;

// console.log("vehiculo", vehiculo);

//Acttualizar una propiedad

vehiculo.encendido = true;

// console.log("vehiculo", vehiculo);

//recorrer un objeto

// ciclo for in
for (cart in vehiculos) {
  console.log("vehiculo", cart);
}

//recorrer un objeto

// trae las keys del objeto
const cart2 = Object.keys(vehiculo);

// console.log("cart2", cart2);

// trae los values del objeto
const cart3 = Object.values(vehiculo);

// console.log("cart3", cart3);

// trae las keys y los values del objeto en un array
const cart4 = Object.entries(vehiculo);

// console.log("cart4", cart4);

// trae los nombres de las keys del objeto
const cart5 = Object.getOwnPropertyNames(vehiculo);

// console.log("cart5", cart5);

const marca2 = 'Chevrolet';

// ciclo map para recorrer un array de objetos
const cart6 = vehiculos.map((vehiculo) => vehiculo.marca === marca2);

// console.log("cart6", cart6);


// ciclo filter para recorrer un array de objetos y traer los que cumplan la condicion
const filter = vehiculos.filter((vehiculo) => vehiculo.marca === marca2);

// console.log("filter", filter);

// ciclo find para recorrer un array de objetos y traer el primero que cumpla la condicion
const find = vehiculos.find((vehiculo) => vehiculo.marca === marca2);

// console.log("find", find);

// ciclo some para recorrer un array de objetos y traer true si alguno cumple la condicion

const some = vehiculos.some((vehiculo) => vehiculo.marca === marca2);

// console.log("some", some);

// ciclo every para recorrer un array de objetos y traer true si todos cumplen la condicion

const every = vehiculos.every((vehiculo) => vehiculo.marca === marca2);

// console.log("every", every);

// ciclo reduce para recorrer un array de objetos y traer un valor

const reduce = vehiculos.reduce((total, vehiculo) => `${total} ${vehiculo.marca}`, '');

// console.log("reduce", reduce);

//destructuring

const { marca, modelo, año, color, cantidadPasajeros, encendido, dimension, accesorios, techo } = vehiculo;

const { alto, ancho, largo } = dimension;


console.log("marca", marca);
console.log("modelo", modelo);
console.log("año", año);
console.log("color", color);
console.log("cantidadPasajeros", cantidadPasajeros);
console.log("encendido", encendido);
console.log("dimension", dimension);
console.log("accesorios", accesorios);

console.log("alto", alto);
console.log("ancho", ancho);
console.log("largo", largo);



