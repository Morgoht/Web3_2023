const Total = ({exercises}) => {
    console.log(exercises)
    const total = exercises.reduce((a,b) => a+b)
    return(
        <div>
            <p>Total of {total}</p>
        </div>
    )
}
export default Total