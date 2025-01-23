//import React, { useEffect } from "react";
import "../ComponentsCSS/Home.css";
import "../App.css";
import { Project } from "./Projects";
import backgroundimage from "../Resources/background-image.png";
import GithubIcon from "../Resources/PortfolioResources/github-desktop.svg";

//import { Link } from "react-router-dom";

export function Home(): JSX.Element {
    //const [toggle, setToggle] = useState(false);
    function scrollToProj(): void {
        document
            .getElementById("projects-section-id")!
            .scrollIntoView({ behavior: "smooth" });
    }
    /*function toggleLight(): void{
		setToggle(!toggle);
	}
    {
        useEffect(() =>{
		document.body.classList.toggle('light-mode');
	});*/
    return (
        <div className="container">
            <img src={backgroundimage} className="background-image" alt="" />
            <section className="title-background">
                <div className="indent-container">
                    <div className="indent-sphere"></div>
                    <div className="indent-line"></div>
                </div>
                <div className="text">
                    <div className="intro">Hi, I'm Christian Rullan</div>
                    <div className="paragraphs">
                        <p>👋</p>
                        <p>
                            I am a graduate from the University of Delaware
                            pursuing a career in technology
                        </p>
                        <p>🎓</p>
                        <p>
                            I graduated University with a 3.8 GPA in Computer
                            Science with a focus on Web Development, Systems,
                            and Networks
                        </p>
                        <p>👨‍💻</p>
                        <p>
                            I strive to learn everyday with a deep passion for
                            exploring the world of emerging technologies.
                        </p>
                        <p>📚</p>
                        <p>
                            Throughout my academic journey, I've worked on
                            various software projects, scroll down to view some
                            of them...
                        </p>
                    </div>
                    <div style={{ textAlign: "center", padding: "5px" }}>
                        <a
                            href="https://github.com/ChristianPNG"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={GithubIcon}
                                alt=""
                                height={"35px"}
                                className="github-icon"
                            />
                        </a>
                    </div>
                </div>
                {/*<figure className="sphere1"></figure>
				<figure className="sphere2"></figure> */}
                <div className="title-content">
                    <div className="header">
                        <button onClick={scrollToProj}>Projects</button>
                        {/*<button>
							<Link to={"/About"}>About</Link>
	</button>*/}
                        {/*<button onClick={toggleLight}>&#9789;</button>*/}
                    </div>
                </div>
            </section>
            <section>
                <Project></Project>
            </section>
        </div>
    );
}
