import { NavLink } from "react-router-dom";
import * as Routes from '../../routes';
import '@animated-burgers/burger-squeeze/dist/styles.css' 
const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
} 



const Header = () => {
    return (
        <div className="header">
            
            <nav>
                <div id="navigation">
                    <div id="nav" className="nav">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <NavLink  to={Routes.LANDING} isActive={checkActive} className="nav-link" activeClassName="active">Home</NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink  to={Routes.ABOUTME} className="nav-link" activeClassName="active">About me</NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink  to={Routes.PORTFOLIO} className="nav-link" activeClassName="active">Portfolio</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;