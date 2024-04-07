import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "./logoV1.png";
import profilepic from "./profilepic.png"
import './NavigationBar.css';

export default function NavigationBar() {
    const handleSignOut = () => {
        document.cookie = "token=;";
    }
    return (
        <>
            <nav className="NavNavigate">
                <ul className="ListNavigate">
                    <li>
                        <img src={logo} alt="logo" />
                    </li>
                    <li>
                        <Link to="/all-motors">ALL MOTORS</Link>
                    </li>
                    <li>
                        <Link to="/record">RECORD</Link>  
                    </li>
                    
                </ul>
                <ul className="ListNavigate-end">
                    <li>
                        <Link to="/profile"><img src={profilepic} style={{width:"50px"}}/></Link>
                    </li>
                    <li>
                        <button className="sign-out-button" onClick={handleSignOut}> <Link to="/" className="Link-No-underline">Sign out</Link></button>
                    </li>
                </ul>
                

            </nav>
        </>
    );
}