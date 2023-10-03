import Content from "../Content/Content"
import Header from "../Header/Header"
import Total from "../Total/Total"

const Course = ({course}) => {
    return(
        <div>
            <Header header={course.name }/>
            <Content content= {course.parts} />
        </div>
    )
}
 export default Course