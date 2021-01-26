import { Link } from 'react-router-dom'
import './Header.css'
// import logoimage from '../../images/samplelogo.png'

export default function Header(props) {
    return (
        <header className="Header">
            {/* <div className="LogoImage"> */}
                {/* <img src={logoimage} alt="logoimage" /> */}
            {/* </div> */}
            <div className="HeroText">
                <h1>
                    Photon Phantom LLC
                </h1>
            </div>
            <nav>
                <ul className="NavLinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="Gallery">Gallery</Link></li>
                        <li><Link to="Reviews">Reviews</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
