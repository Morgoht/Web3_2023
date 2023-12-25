import Number from "./Number"

const Numbers = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul className="no-bullets">
                {persons.map( p => <li key={p.id} > <Number  person={p} /></li>)}
            </ul>
        </div>
    )
}

export default Numbers