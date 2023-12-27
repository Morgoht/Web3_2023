import PersonService from '../../services/persons'

const Person = ({person, deleteOne}) => {
    
    const handleClick =(e) => {
        e.preventDefault();
        deleteOne(person.id)
    }

    return(
        <div>
            {person.name} {person.number}
            <button onClick={handleClick}>
                 delete 
            </button>
        </div>
    )
}

export default Person