import { Link } from "react-router-dom"
export default function NavigationBar(){
    return(<>
    <nav>
        <ul>
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
            
        </ul>
    </nav>
    </>)
}