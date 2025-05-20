
import usePokemon from '../../hooks/usePokemon'
import '../PokemonDetails/PokemonDetail.css'
import { Link, useParams } from 'react-router-dom'


function PokemonDetail() {
  
  const {id}=useParams()  // I use id here because in route  also use pokemon/:id .
  
  const [pokemon]=usePokemon(id)
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