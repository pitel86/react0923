import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Locations = () => {
  const [locations, setLocations ] = useState([])


  const getLocations = async () => {
    const results = await axios("https://rickandmortyapi.com/api/location");
    setLocations([...results.data.results])
  }
  useEffect(() => {
    getLocations()
  },[])
  return (
    <div>
      {locations.map((location) => <p>{location.name}</p>)}
    </div>
  )
}

export default Locations