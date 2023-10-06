import servicePerson from '../../services/persons'

const Number = ({person}) => {
    console.log(person)
    
    const handleDelete = (e) => {
        if(window.confirm(`Do you really want to delete ${person.name}`)){
            servicePerson
            .remove(person.id)
        } 
        
    }
    return (
        <div>
            <span>
                {person.name} {person.number}
            </span>
            <button onClick={handleDelete}>delete</button>
                
        </div>
    )
}
export default Number