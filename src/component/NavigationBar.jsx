import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom"
import './NavigationBar.css'
export default function NavigationBar(){
    return(<>
    <nav className="NavNavigate">
        <ul className="ListNavigate">
            <li> 
            <Link to="/all-motors">ALL MOTORS</Link>
            </li>
            <li>
            <Link to="/favorite">FAV motor</Link>
            </li>
            <li>
            <Link to="/factory">FACTORY M.</Link>  
            </li>
            <li>
            <Link to="/multi-view">MULTIVIEW</Link>    
            </li>
            <li>
            <Link to="/record">RECORD</Link>  
            </li>
            <li><Link to="/record" className="GosignOut" ><GoSignOut /></Link>  </li>
            
        </ul>
    </nav>
    </>)
}