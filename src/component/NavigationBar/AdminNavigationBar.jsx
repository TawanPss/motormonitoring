import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "./logoV1.png";
import './NavigationBar.css';

export default function AdminNavigationBar() {

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
                        <Link to="/" className="GosignOut" ><GoSignOut /></Link>  
                    </li>
                </ul>
            </nav>
        </>
    );
}