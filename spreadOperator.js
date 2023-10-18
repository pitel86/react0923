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
  