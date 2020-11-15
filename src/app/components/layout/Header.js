import { NavLink } from "react-router-dom";
import * as Routes from '../../routes';
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import { Power1, Power3, TimelineMax } from "gsap";
const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
} 

const hero = document.querySelector('.hero');
// const slider = document.querySelector('.slider');
// const logo = document.querySelector('#logo');
// const hamburger = document.querySelector('.hamburger');
// const headline = document.querySelector('.headline');

const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%"} ,{ height: "60%", ease: Power1.easeInOut})
.fromTo(hero, 1.2, {width: "0%"}, { width: "30%", ease: Power3.easeInOut});

const Header = () => {
    return (
        <div className="header">
            
            <nav>
                <div id="navigation">
                    <div id="nav" className="nav" style={{display: "none"}}>
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