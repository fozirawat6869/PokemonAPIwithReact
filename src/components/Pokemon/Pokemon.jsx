import React from 'react'
import '../Pokemon/Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon({url,name,id}) {
  return (
    <>
      <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
    <div className='pokemonn'>
    <div className='pokemon-namee'>{name}</div>
    <img src={url} alt="pokemon-image" className='pokemon-image' />
    </div>
    </Link>
    </>
  )
}

export default Pokemon