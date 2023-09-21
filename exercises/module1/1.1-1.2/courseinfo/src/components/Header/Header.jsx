import imgLogo from './logo.png'

const Header = ({course}) => {
    return (
        <div>
            <img src={imgLogo}></img>
            <h1>{course}</h1>
        </div>
    )
}
export default Header