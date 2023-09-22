const Button = ({label, delta, onClick}) => {
    console.log(parseInt(delta))
    const handleClick = (e) => {
        
        const delta = e.target.dataset.delta
        console.log(parseInt(delta))
        onClick(delta)
    }
    return(
        <div>
            <button data-delta={delta} onClick={handleClick} >{label}</button>
        </div>
    )
}
export default Button