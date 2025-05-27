import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DownloadPokemons from '../utils/DownloadPokemon';


function usePokemonList(default_URL) {
   

    // const [pokemonList,setPokemonList]=useState([])
    // const [pokedexUrl,setPokedexUrl]=useState(default_URL)
    // const [nextUrl,setNextUrl]=useState(default_URL)
    // const [prevUrl,setPrevUrl]=useState(default_URL)
     
    const [pokemonState,setPokemonState]=useState({
      pokemonList:[],
      pokedexUrl:default_URL,
      nextUrl:default_URL,
      prevUrl:default_URL
    })

 
    //hlo

    useEffect(()=>{
          DownloadPokemons(pokemonState,setPokemonState,default_URL)
    },[pokemonState.pokedexUrl])
  return [pokemonState,setPokemonState]
}

export default usePokemonList