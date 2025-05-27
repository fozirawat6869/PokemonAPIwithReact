import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DownloadPokemons from '../utils/DownloadPokemon';

function usePokemon(id,default_URL) {
       const pokemon_detail_url="https://pokeapi.co/api/v2/pokemon/";
 const [pokemon,setPokemon]=useState(null)

   const [pokemonState,setPokemonState]=useState({
      pokemonList:[],
      pokedexUrl:'',
      nextUrl:'',
      prevUrl:''
    })

  async function downloadGivenPokemon(id){
     const response=await axios.get(pokemon_detail_url + id);
     const pokemon=response.data;
     setPokemon({
         name:pokemon.name,
         height:pokemon.height,
         weight:pokemon.weight,
         types:pokemon.types,
         image:pokemon.sprites.other.dream_world.front_default
     })
     const types=response.data.types.map((t)=>t.type.name)
     return types[0]
  }

  async function downloadPokemonsAndRelated(id){
    const type = await downloadGivenPokemon(id)
    await DownloadPokemons(pokemonState,setPokemonState,`https://pokeapi.co/api/v2/type/${type}`)
  }
  useEffect(()=>{
    // downloadPokemon(id)
    downloadPokemonsAndRelated(id)
     window.scrollTo({top:0,left:0,behavior:'smooth'})
  },[id])
  return[pokemon,pokemonState]
}

export default usePokemon