import logo from "../assets/images/logo.svg";

import Nav from "../components/navigation/Navigation";

let logo1 = document.querySelector('.logo');
if(logo1) {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        let logo = document.querySelector('.logo');
        const speed = logo.getAttribute('data-speed');
    
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
    
        logo.style.transform = `rotate(-45deg) translateY(-30%) translateX(${x}px) translateY(${y}px)`
    
    }
}

const Aboutme = () => {
    return (
        <div>
            <Nav />
            <div className="background"><img className="logo animate__bounceInLeft" data-speed="2" id="logo" src={logo} alt="logo"></img></div>
        </div>
    );
};

export default Aboutme;

