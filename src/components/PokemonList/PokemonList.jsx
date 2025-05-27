
import '../PokemonList/PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'
import usePokemonList from '../../hooks/usePokemonList'

function PokemonList() {
    const default_URL="https://pokeapi.co/api/v2/pokemon"
   const [pokemonState,setPokemonState]=usePokemonList(default_URL)
   
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