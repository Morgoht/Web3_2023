import { useContext } from "react"
import { Context as OpinionContext } from "../../contexts/VotesContext"
import VoteOpinion from "../Opinion/VoteOpinion"
import AddOpinion from "components/Opinion/AddOpinion"


function App() {
  const {opinions} = useContext(OpinionContext)
  console.log(opinions)

  return (
    <div>
      {opinions.map(opinion => 
        <VoteOpinion key={opinion.id} opinion = {opinion}/>  
      )}
      <AddOpinion/>
    </div>
  )
}

export default App
