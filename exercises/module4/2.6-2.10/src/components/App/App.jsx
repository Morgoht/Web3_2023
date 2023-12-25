import { useState } from 'react'
import Numbers from 'components/Numbers/Numbers'
import '../../main.css'

const App = () => {
  const [persons, setPersons] = useState([
    {  id: 0, name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const addNewName = (e) => {
    e.preventDefault()
    const newPerson = {id: persons.length, name:newName}
    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input  value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
      
    </div>
  );
};

export default App;
