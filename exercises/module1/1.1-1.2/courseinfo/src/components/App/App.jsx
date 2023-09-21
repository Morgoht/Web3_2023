
import Header from "components/Header/Header"
import Content from "../Content/Content"
import Total from "../Total/Total"



function App() {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [exercises1,exercises2,exercises3]
  const parts = [part1, part2, part3]
  return (
    <>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total exercises = {exercises}/>
    </>
  )
}

export default App
