import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetails/PokemonDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* It help to register multiple route  */}
    <Routes>   
      <Route  path='/' element={<Pokedex/>} />
      <Route path='/pokemon/:id' element={<PokemonDetail />} />
        <Route path='*' element={<h1>Not found page</h1>} />
    </Routes>
     
    </>
  )
}

export default App
