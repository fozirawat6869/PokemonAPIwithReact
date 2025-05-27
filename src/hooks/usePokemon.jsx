import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DownloadPokemons from '../utils/DownloadPokemon';
import { useParams } from 'react-router-dom';

function usePokemon(pokemonName) {
    const {id}=useParams()  // I use id here because in route  also use pokemon/:id .

       const pokemon_detail_url="https://pokeapi.co/api/v2/pokemon/";
 const [pokemon,setPokemon]=useState(null)

   const [pokemonState,setPokemonState]=useState({
      pokemonList:[],
      pokedexUrl:'',
      nextUrl:'',
      prevUrl:''
    })

  async function downloadGivenPokemon(id){
     const response=await axios.get(pokemon_detail_url + ((pokemonName) ? pokemonName : id));
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
    try{
   const type = await downloadGivenPokemon(id)
    await DownloadPokemons(pokemonState,setPokemonState,`https://pokeapi.co/api/v2/type/${type}`)
    }catch(e){
       console.log("no pokemon found")
    }
  }

  useEffect(()=>{
    // downloadPokemon(id)
    downloadPokemonsAndRelated(id)
     window.scrollTo({top:0,left:0,behavior:'smooth'})
  },[id,pokemonName])
  return[pokemon,pokemonState]
}

export default usePokemon