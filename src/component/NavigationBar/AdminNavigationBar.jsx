import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "./logoV1.png";
import './NavigationBar.css';
import { useState } from 'react';

export default function AdminNavigationBar() {

    return (
        <>
            <nav className="NavNavigate">
                <ul className="ListNavigate">
                    <li>
                        <img src={logo} alt="logo" />
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