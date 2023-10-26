

const game = {
    name: "Elden Ring",
    image: "https://gaming-cdn.com/images/products/4824/380x218/elden-ring-pc-juego-steam-europe-cover.jpg?v=1697630400",
    price: "28.73",
    discount: "52"
  }

  const {name, price} = game


  console.log({...game, image: "pepito"});

//   [text, setText] = useState({})


//   setText({...game, image: ev.target.value})
//   setText({...game, nombre: ev.target.value})
  


const numeros = [5, 8, 20, 46]
console.log(numeros);

const numeros2 = [...numeros]
console.log(numeros2);

const personas = [{name: "Pepe", edad: 35},{name: "Juan", edad: 22}]
const personas3 = [{name: "Luis", edad: 35},{name: "Ana", edad: 22}]

const personas2 = [...personas];
console.log(personas2);
console.log([...personas]);


const mostrarPersonas = (personas) => {
  console.log(personas);
}

mostrarPersonas(personas);
mostrarPersonas([...personas,...personas3]);

// const [ nombre, setNombre ] = useState("");
// setNombre("Pepe")
// setNombre(personas[0].name)

let pepito = {name: "Pepe", edad: 35}

console.log({...pepito, email: "pepito@gmail.com"})
console.log(pepito)

pepito = {...pepito, email: "pepito@gmail.com"}
console.log(pepito)

pepito = {...pepito, email: "pepepepe@gmail.com"}
console.log(pepito)

