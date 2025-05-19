import React, { useEffect, useState } from 'react'
import '../PokemonDetails/PokemonDetail.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function PokemonDetail() {
   const pokemon_detail_url="https://pokeapi.co/api/v2/pokemon/";
  const {id}=useParams()  // I use id here because in route  also use pokemon/:id .
 const [pokemon,setPokemon]=useState(null)
  async function downloadPokemon(){
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
    downloadPokemon()
  },[])
  return (
    <>
    <Link to='/' className='home-page'>Pokedex</Link>
    {pokemon && <div className='pokemon-details-wrapperr'>    
      <div className='pokemon-detail-name '> 
        {pokemon.name}
      </div>
      <div  className='pokemon-image '>
        <img src={pokemon.image} alt="" />
      </div>
      <div className='pokemon-attributes '>
        <div>  
          <b> weight:</b>  {pokemon.weight} 
        </div>
         <div>
         <b> height:</b> {pokemon.height}
         </div>
      </div>
      <div className='pokemon-types '>
        <h1>type:</h1> {pokemon.types.map((t)=><span className='type' key={t.type.name}>{t.type.name}</span>)}
      </div>
    </div>}
    </>
  )
}

export default PokemonDetail