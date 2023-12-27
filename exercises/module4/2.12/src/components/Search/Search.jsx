import { useState } from "react"

const Search = ({handleSearch}) => {
const [search, setSearch] = useState('')

const handleChangeSearch = (e) => {
    setSearch(e.target.value)
    handleSearch(search)
}

    return(
        <div>
                Search : <input value={search} onChange={handleChangeSearch}/>
        </div>
    )
}

export default Search