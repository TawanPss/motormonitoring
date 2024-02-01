// Sidebar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { IconContext } from 'react-icons';
import './Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const sidebarData = [
        {
            path: "/dashboard",
            icon: <MdSpaceDashboard/>,
            title: "Dashboard",
        },
        {
            path: "/records",
            icon: <FaIcons.FaFile />,
            title: "Records",
        },
        {
            path: "/about",
            icon: <FaIcons.FaInfoCircle />,
            title: "About",
        },

    ]

    return (
        <>
            <IconContext.Provider value={{color: "undifined"}}>
            <div className='sidebar'>
                <Link to={"#"} className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to={"#"} className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className="nav-text">
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )

}

export default Sidebar;
