import {NavLink} from 'react-router-dom';

function Sidebar() {
    return ( 
        <div className="sidebar">
            <h2>NEXUS ADMIN</h2>
            <ul>
                <li><NavLink to="/dashboard"
                className={({isActive}) => isActive ? "active" : "" }
                >Dashboard</NavLink></li>
                <li><NavLink to="/analytics"
                className={({isActive}) => isActive ? "active" : "" }
                >Analytics</NavLink></li>
            </ul>
        </div>
     );
}

export default Sidebar;