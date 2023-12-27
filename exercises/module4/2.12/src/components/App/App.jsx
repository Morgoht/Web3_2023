import { useEffect, useState } from 'react'
import '../../App.css'
import personService from '../../services/persons'
import Persons from '../Persons/Persons'
import AddPerson from 'components/AddPerson/AddPerson'
import Search from 'components/Search/Search'

function App() {
  const [persons, setPersons] = useState([])
  const [searchPersons, setSearchPersons] = useState([])

  const hook = () => {
    personService.getAll()
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const addOne = (newPerson) => {
    personService.addOne(newPerson)
    .then(response => {
      setPersons(persons.concat(response.data))
    })
  }

  const deleteOne = (id) => {
    console.log(`delete one id : ${id}`);
    personService.deleteOne(id)
    setPersons(persons.filter(p => p.id !== id))
  }

  const handleSearch = (search) => {
      setSearchPersons(persons.filter(p => p.name.includes(search)))
  }
  
  return (
    <div>
      <h2>Search</h2>
      <Search handleSearch={handleSearch}/>
      <h2>Add person</h2>
      <AddPerson addOne={addOne}/>
      <h2>Phonebook</h2>
      <Persons persons = {persons} deleteOne={deleteOne} />
      
      
    </div>
  )
}

export default App
