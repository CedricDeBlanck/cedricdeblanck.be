import face from "../assets/images/face.jpg";
import logo from "../assets/images/logo.svg";
import { Header } from "../components/layout"; 
import { useState } from "react";
import styled from 'styled-components';
import 'animate.css';

const Hamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
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
            transform: ${({ open }) => open ? 'translateX(150%)' : 'translateX(0)'};
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

const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav>
                
                <Hamburger open={open} onClick={() => { setOpen(!open); }}>
                    <div />
                    <div />
                    <div />
                </Hamburger>

                <Navigation className="navigation" open={open}>
                    <div>
                        <nav>
                            <Header />
                        </nav>
                    </div>
                </Navigation>
            </nav>
            <section className="animate__fadeInLeft">
                <div className="photo--section">
                    <h1 className="headline">Cédric De Blanck</h1>
                </div>
            </section>
            <div className="mouse-scroll">
                <div className="mouse-line"></div>
            </div>
            <div className="background"><img className="animate__bounceInLeft" id="logo" src={logo}></img></div>
        </header>
    );
};

export default Home;