// import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <header className="Header">
            <div className="HeroText">
                <p>
                    Photon Phantom LLC
                </p>
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
