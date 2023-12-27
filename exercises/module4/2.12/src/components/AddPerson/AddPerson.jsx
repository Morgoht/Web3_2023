import { useState } from "react";
import personService from '../../services/persons';

const AddPerson = ({addOne}) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
        name: `${newName}`,
        number: `${newNumber}`
    }
    addOne(newPerson);
    setNewName('')
    setNewNumber('')
    
}

const handleChangeName = (e) => {
    setNewName(e.target.value);
}
const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                name : <input value={newName} onChange={handleChangeName}/>
                <br/>
                number : <input value={newNumber} onChange={handleChangeNumber}/>
                <br/>
                <button type="submit" style={{background: "white", color: "black"}}>
                    name
                </button>
            </form>
        </div>
    )
}
export default AddPerson;