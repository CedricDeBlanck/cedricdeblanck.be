import face from "../assets/images/face.jpg";
const Home = () => {

    return (
        <header>
            <nav>
                <h3 id="logo">Dream Vacation</h3>
                <div className="hamburger">
                    <button onClick={(e) => {
                        e.preventDefault();                    
                    }} className="hamburger hamburger--elastic" type="button">
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </nav>
            <section>
                <div className="hero">
                    <img src={face} alt="Me"></img>
                    <h1 className="headline">Cédric De Blanck</h1>
                </div>
            </section>

            <div className="slider"></div>
        </header>
    );
};

export default Home;