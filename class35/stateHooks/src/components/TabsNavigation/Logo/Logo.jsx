import './Logo.css'
import imageLogo from "../../../assets/react.png"

const Logo = () => {
    return (
        <header className="header">
            <img src={imageLogo} alt="React logo" />
            <div className="header-info">
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </div>
        </header>
    )
}

export default Logo