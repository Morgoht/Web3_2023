import { useState } from 'react';
import Numbers from 'components/Numbers/Numbers';
import Phonebook from 'components/Phonebook/Phonebook';
import '../../main.css';
import Search from 'components/Search/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', phone: '00324657845' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [personToShow, setPersonToShow] = useState([])

  const addNewPerson = (newName, newPhone) => {
    const newPerson = { id: persons.length, name: newName, phone: newPhone };
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} existe déja `);
      return;
    }
    setPersons([...persons, newPerson]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setPersonToShow={setPersonToShow} persons={persons}/>
      <h2> Add a new </h2>
      <Phonebook addNewPerson={addNewPerson} />
      <Numbers persons={personToShow} />
    </div>
  );
};

export default App;
