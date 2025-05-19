import { useEffect } from 'react'
import '../PokemonList/PokemonList.css'
import { useState } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList() {
    const default_URL="https://pokeapi.co/api/v2/pokemon"
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

    async function DownloadPokemons(){
        const response=await axios.get(pokemonState.pokedexUrl ? pokemonState.pokedexUrl : default_URL);
        console.log(response.data)
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);  we can write both in same for easy
        //  setPokemonState((state)=>({...state,nextUrl:response.data.next, prevUrl:response.data.previous}))  
        // we can use this setStae only once for easy eway
         //we use call back to go to next because it didn't run without it

        const pokemonResults=response.data.results  // array of pokemons
        const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url))
        console.log(pokemonPromise)
        const pokemonListData=await axios.all(pokemonPromise)  // In axios.all ( we Pass an array of promises )    
        /*  No await = you get a Promise (not real data)
           With await = you get the real data  */
        console.log(pokemonListData);

        const pokemonFinalList=pokemonListData.map(pokemonData=>{
            const pokemon=pokemonData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                types:pokemon.types,
            }
        }
        )
        console.log(pokemonFinalList)
        // setPokemonList(pokemonFinalList)
        setPokemonState({...pokemonState,pokemonList:pokemonFinalList,nextUrl:response.data.next, prevUrl:response.data.previous})
    }
    //hlo

    useEffect(()=>{
          DownloadPokemons()
    },[pokemonState.pokedexUrl])
  return (
    <>
    <div className='pokemon-list-wrapper'>
    <div id='pokemon-list-header'>Pokemon List </div>
    <div className='page-control'> 
        <button onClick={()=> setPokemonState({...pokemonState,pokedexUrl:pokemonState.prevUrl})}>Previous</button>
         <button onClick={()=>setPokemonState({...pokemonState,pokedexUrl:pokemonState.nextUrl})}>Next</button>
    </div>
    <div className='pokemon-list'>
    {pokemonState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
    </div>
    </div>
    </>
  )
}

export default PokemonList