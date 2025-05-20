import axios from 'axios';
import React, { useEffect, useState } from 'react'

function usePokemon(id) {
       const pokemon_detail_url="https://pokeapi.co/api/v2/pokemon/";
 const [pokemon,setPokemon]=useState(null)

  async function downloadPokemon(id){
     const response=await axios.get(pokemon_detail_url + id);
     const pokemon=response.data;
     setPokemon({
         name:pokemon.name,
         height:pokemon.height,
         weight:pokemon.weight,
         types:pokemon.types,
         image:pokemon.sprites.other.dream_world.front_default
     })
  }
  useEffect(()=>{
    downloadPokemon(id)
  },[])
  return[pokemon]
}

export default usePokemon