import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import { logout } from "../APIs/ApiComponent";
import logo from "./logoV1.png";
import profilepic from "./profilepic.png"
import { useDispatch } from "react-redux";
import { removeUser } from "../../slicers/userSlice";
import { removeToken } from "../APIs/Cookie";
import './NavigationBar.css';

export default function NavigationBar() {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="NavNavigate">
                <ul className="ListNavigate">
                    <li>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
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
                        <button className="sign-out-button" onClick={() => {dispatch(removeUser()), logout(), removeToken()}}> <Link to="/" className="Link-No-underline">Sign out</Link></button>
                    </li>
                </ul>
                

            </nav>
        </>
    );
}