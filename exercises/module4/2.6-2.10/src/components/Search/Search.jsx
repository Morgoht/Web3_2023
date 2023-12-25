import { useState } from "react"

const Search = ({persons, setPersonToShow}) => {
const [search, setSearch] = useState('')

const handleSearch = (e) => {
    setSearch(e.target.value)
    const newPersons = persons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    setPersonToShow(newPersons)
    console.log(newPersons)
}
    return (
        <div>
            <form>
                filter shown with <input value={search} onChange={handleSearch}/>
            </form>
        </div>
    )
}

export default Search