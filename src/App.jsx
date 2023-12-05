
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import CharacterInfo from './components/CharacterInfo'




function App() {
  const [inputValue, setInputValue] = useState("")
  const inputSearch = useRef()
  
  const url = "https://simpson-dev-txbz.4.us-1.fl0.io/characters"
  const [characters, getCharacters, hasError] = useFetch(url)
  const [currentPage, setCurrentPage] = useState(1)
  const characterPerPage = 6

  
  const lastIndex = characterPerPage * currentPage
  const firstIndex = lastIndex - characterPerPage

  

  useEffect(() => {
    getCharacters()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }
  
  /*const simpsonFiltered = characters?.filter(character => character.firstName.includes(inputValue))*/
  const simpsonFiltered = characters?.filter(character => {
    const fullName = `${character.firstName} ${character.lastName}`
    return fullName.includes(inputValue);
    
  })
  
  const simpsonPaginated = simpsonFiltered?.slice(firstIndex, lastIndex)

  return (
    <div>
      <h1 className='resident__tittle'>The Simpsons</h1>
      <form className="resident__search" onSubmit={handleSearch}>
        <input className="resident__input"ref={inputSearch} type="text" placeholder='Name...'/>
        <button className='resident__button'>Search</button>
      </form>
      {
        hasError 
        ? <h2>hey you must provide a name of character</h2>
          : (
            <>
              <div className='container'>
                {
                 simpsonPaginated?.map(character => (
                    <CharacterInfo
                      key={character.id}
                      character={character} />
                  ))
                 
                }
              </div>
              <div className='btn'>
              
              <button className='btn__previous' onClick={() =>setCurrentPage(currentPage - 1)}>Previous</button>
              <button className="btn__next"onClick={() =>setCurrentPage(currentPage + 1)}>Next</button>
              </div>
            </>
          )
      }
    </div>
  )
}
export default App
