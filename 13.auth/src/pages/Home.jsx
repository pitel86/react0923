import React, { useEffect } from 'react'
import { API } from '../shared/services/api'

const Home = () => {
  const getAutores = async () => {
    const result = await API.get("autores")
    console.log(result)
  }

  const getLibros = async () => {
    const result = await API.get("libros")
    console.log(result)
  }

  useEffect(() => {
    // getAutores();
    getLibros()
  },[])
  return (
    <div>Home</div>
  )
}

export default Home