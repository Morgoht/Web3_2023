import { useContext, useState } from 'react'
import {Context, Context as OpinionContext} from '../../contexts/VotesContext'

const AddOpinion = () => {
    const {addOpinion} = useContext(Context)
    const [newOpinion, setNewOpinion] = useState('')

    const handleChangeOpinion = (e) => setNewOpinion(e.target.value)


    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(newOpinion.length === 0){
            alert('you can not add an empty opinion : sentiment')
        }else {
            addOpinion(newOpinion)
            setNewOpinion('')
        }
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    value={newOpinion}
                    onChange={handleChangeOpinion}>
                 </input>
                <button type='submit'>Add Opinion</button>

            </form>
        </div>

    )
}
export default AddOpinion