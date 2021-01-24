// import { Link } from 'react-router-dom'
import './Header.css'
import logoimage from '../../images/samplelogo.jpg'

export default function Header(props) {
    return (
        <header className="Header">
            <div className="LogoImage">
                <img src={logoimage} alt="logoimage" />
            </div>
            <div className="HeroText">
                <h1>
                    Photon Phantom LLC
                </h1>
            </div>
            <nav>
                <ul className="NavLinks">
                    <li>Contact</li>
                    <li>Review</li>
                    <li>Gallery</li>
                </ul>
            </nav>
        </header>
    )
}
