import { useState } from "react"

const Search = ({persons, setPersons}) => {
    const [newSearch, setNewSearch] = useState('')
    const handleNewSearch = (e) => {
        e.preventDefault()
        setNewSearch(e.target.value)
        const resultSearch = persons.filter(p => p.name.includes(newSearch))
        console.log(resultSearch)
        setPersons(resultSearch)
      }
    return(
        <form>
            <div>
            filter shown with : <input value={newSearch} onChange={handleNewSearch}/>
            </div>
      </form>
    )
}
export default Search