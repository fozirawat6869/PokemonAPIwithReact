import axios from "axios";

   async function DownloadPokemons(pokemonState,setPokemonState,default_URL,limit=20){
        const response=await axios.get(pokemonState.pokedexUrl ? pokemonState.pokedexUrl : default_URL);
        console.log(response.data)
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);  we can write both in same for easy
        //  setPokemonState((state)=>({...state,nextUrl:response.data.next, prevUrl:response.data.previous}))  
        // we can use this setStae only once for easy eway
         //we use call back to go to next because it didn't run without it

        let pokemonResults=response.data.results ? response.data.results : response.data.pokemon // array of pokemons
         pokemonResults=pokemonResults.slice(0,limit);
        const pokemonPromise=pokemonResults.map((p)=>{
            if(p.url){
              return  axios.get(p.url)
            }
            if(p.pokemon.url){
              return axios.get(p.pokemon.url)
            }
          })
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
    export default DownloadPokemons;