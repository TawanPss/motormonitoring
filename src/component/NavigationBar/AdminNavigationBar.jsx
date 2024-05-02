import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import { logout } from "../APIs/ApiComponent";
import { removeUser } from "../../slicers/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../APIs/Cookie";
import logo from "./logoV1.png";
import './NavigationBar.css';

export default function AdminNavigationBar() {

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
                        <Link to="/admin-all-motors">All motors</Link>
                    </li>
                    <li>
                        <Link to="/admin-new-motor">New motor</Link>
                    </li>
                    <li>
                        <Link to="/admin-customer-list">Customer List</Link>
                    </li>
                    <li>
                        <Link to="/" className="GosignOut" onClick={() => {
                            dispatch(removeUser()),
                            logout(),
                            removeToken()
                        }}><GoSignOut /></Link>  
                    </li>
                </ul>
            </nav>
        </>
    );
}