const Button = ({label, onClick}) => {
    const delta = e.target.dataset.delta
    console.log(delta)
    return(
        <div>
            <button onClick={onClick(delta)} >{label}</button>
        </div>
    )
}
export default Button