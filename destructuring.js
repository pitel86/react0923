let myObjeto = {
    nombre: "Pepito",
    apellido: "perez",
    edad: "36",
    email: "peppito@perez.com",
    password: "aspojdpaosfhapisfhpaosfhaposf"
}

myObjeto = {...myObjeto, edad: 25}
myObjeto.edad = 33

const {edad, email} = myObjeto;
console.log(edad, email)

// CON DESTRUCTURING Y SPREAD OPERATOR PODEMOS QUITAR LAS PROPIEDADES DE UN OBJETO Y QUEDARNOS EL RESTO
const {password, apellido, ...resto} = myObjeto;

console.log(password)
console.log(resto)