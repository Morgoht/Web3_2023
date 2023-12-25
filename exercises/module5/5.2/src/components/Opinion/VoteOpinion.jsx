import { useContext } from 'react'
import {Context, Context as VoteContext} from '../../contexts/VotesContext'

const VoteButton = ({opinion}) => {
    const {increaseByOne} = useContext(Context)

    const handleIncrease = () => {
        increaseByOne(opinion.id)
    }
   
    return(
        <div>
           Opinion {opinion.name} : {opinion.count}
            <button onClick={handleIncrease}>Vote</button>
        </div>
    )
}

export default VoteButton
