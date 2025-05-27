import { useState } from 'react'
import '../Pokedex/Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'
import Search from '../Search/Search'
import PokemonDetail from '../PokemonDetails/PokemonDetail'

function Pokedex() {
  const [searchTerm,setSearchTerm]=useState('')
  return (
    <>
    <div className='pokedex-wrapper'>
        <h1>POKEDEX</h1>
        <Search updateSearchTerm={setSearchTerm}/>
        { searchTerm ? <PokemonDetail pokemonName={searchTerm}/> : <PokemonList/>}
    </div>
    </>
  )
}

export default Pokedex