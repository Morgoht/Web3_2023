import Number from "./Number"

const Numbers = ({persons}) => {
    console.log(persons)
    return (
        <ul className="no-bullets">
            {persons.map( p => <li key={p.id} > <Number  person={p} /></li>)}
        </ul>
    )
}

export default Numbers