import { Link } from "react-router-dom";
import './LandingHeader.css'; // Assuming this is the filename for your CSS file

export default function LandingHeader() {
    return (
        <>
            <nav className="landing-header">
                <Link to="/"><h1>Motor monitoring</h1></Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
