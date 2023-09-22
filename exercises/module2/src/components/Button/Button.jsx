const Button = ({label, delta, onClick}) => {
    const handleClick = (e) => {
        const deltaAttribute = e.target.dataset.delta
        const delta =  parseInt(deltaAttribute)
        onClick(delta)
    }
    return(
        <div>
            <button data-delta={delta} onClick={handleClick} >{label}</button>
        </div>
    )
}
export default Button