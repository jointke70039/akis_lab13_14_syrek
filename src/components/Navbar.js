import React from 'react';
import {Link} from "react-router-dom";

const Navbar = props => {
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/">Main</Link></li>                
                <li><Link to="/historia">Historia</Link></li>       
                <li><Link to="/ciekawostki">Ciekawostki</Link></li>       
                
            </ul>
        </nav>
    );
}; export default Navbar;