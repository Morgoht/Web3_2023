import Part from "../Part/Part"

const Content = ({content}) => {
    return (
        <div>
            <ul>
                {content.map(c => <li key={c.id}> <Part part ={c} /></li>)}
            </ul>
        </div>
    )
}
export default Content