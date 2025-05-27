import useDebounce from '../../hooks/useDebounce'
import '../Search/Search.css'

function Search({updateSearchTerm}) {
  const debounceUpdatedSearch=useDebounce((e)=>updateSearchTerm(e.target.value));
  return (
  <input
     id="search-pokemon"
     type='text'
     placeholder="which pokemon you'r looking for ? "
     onChange={debounceUpdatedSearch}
     />
  )
}

export default Search