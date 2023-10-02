const Button = ({label, handler}) => {
    return (
        <div>
            <button className={label} onClick={handler}>{label}</button>
        </div>
    )
}
export default Button