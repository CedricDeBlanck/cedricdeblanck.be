import logo from "../assets/images/logo.svg";
import face from "../assets/images/face.jpg";
import { Header } from "../components/layout"; 
import { useState } from "react";
import styled from 'styled-components';
import 'animate.css';

const Hamburger = styled.div`
    width: 2rem;
    height: 2rem;
    top: 15px;
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 5;
    cursor: pointer;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: white;
        border-radius: 10px;
        transform-origin: 1px;
        transition-duration: 0.3s;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(-150%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? '0' : '1'};
            margin-left: 5px;
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

`

const Navigation = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #111;
    top: 0;
    left: 0;
    transition-duration: 0.3s;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 2;
`

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


const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
                <nav>
                    
                    <Hamburger open={open} onClick={() => { setOpen(!open); }}>
                        <div className="firstham" />
                        <div className="secondham" />
                        <div className="thirdham" />
                    </Hamburger>

                    <Navigation className="navigation" open={open}>
                        <div>
                            <nav>
                                <Header />
                            </nav>
                        </div>
                    </Navigation>
                </nav>
                <section>
                    <div className="photo--section">
                        <img className="itsMe" src={face} alt="Cédric"></img>
                        <h1 className="headline">Cédric De Blanck</h1>
                    </div>
                </section>
                <a href="#about" className="mouse-scroll">
                    <div className="mouse-line"></div>
                </a>
                <div className="background"><img className="logo" data-speed="2" id="logo" src={logo} alt="logo"></img></div>
            <div id="about">
                
            </div>
        </div>
    );
};

export default Home;