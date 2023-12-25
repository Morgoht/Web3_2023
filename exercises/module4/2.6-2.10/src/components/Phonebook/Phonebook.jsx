import { useState } from 'react';

const Phonebook = ({ addNewPerson }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPerson(newName, newNumber);
    setNewName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <br/>
          phone : <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Phonebook;
