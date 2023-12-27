import Person from "./Person"

const Persons = ({persons, deleteOne}) => {

    console.log(persons)
    return(
        <div>
            {persons.map(p => <Person  key= {p.id} person={p} deleteOne={deleteOne}/>)}
            
        </div>
    )
}

export default Persons