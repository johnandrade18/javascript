const check = true;
const check2 = false;

console.log("check", check);
console.log("check2", check2);

console.log("typeof check", typeof check);

const check3 = new Boolean(true);
console.log("check3", check3);
console.log("typeof check3", typeof check3);

console.log("check == check3", check == check3);
console.log("check == check3", check === check3);

if (check === true) {
  console.log("Si es verdadero");
} else {
  console.log("No es verdadero");
}

if (check) {
  console.log("Si es verdadero");
} else {
  console.log("No es verdadero");
}

if (!check) {
  console.log("Si es verdadero");
} else {
  console.log("No es verdadero");
}


console.log(check ? "Si es verdadero" : "No es verdadero");
