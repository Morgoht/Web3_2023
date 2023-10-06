import { useState, useEffect } from 'react'
import personService from '../../services/persons'
import Numbers from 'components/Numbers/Numbers'
import '../../main.css'
import Addnew from 'components/Addnew/Addnew'
import Search from 'components/Search/Search'

const App = () => {
  const [persons, setPersons] = useState([]) 
  

  const hook = () => {
    console.log('effect')
    personService.
    getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Search persons={persons} setPersons={setPersons}/>
      <h2>Add a new </h2>
      <Addnew persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} />

      
    </div>
  )
}

export default App