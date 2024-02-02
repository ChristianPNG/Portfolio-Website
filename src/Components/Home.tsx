import React, { useEffect, useState } from "react";
import "../ComponentsCSS/Home.css";
import "../App.css";
import { Project } from "./Projects";
//import { Link } from "react-router-dom";

export function Home(): JSX.Element {
	const [toggle, setToggle] = useState(false);
	function scrollToProj(): void {
		document
			.getElementById("projects-section-id")!
			.scrollIntoView({ behavior: "smooth" });
	}
	/*function toggleLight(): void{
		setToggle(!toggle);
	}*/
	useEffect(() =>{
		document.body.classList.toggle('light-mode');
	});
	return (
		<div className="container">
			<section className="title-background">
				<div className="indent-container">
					<div className="indent-sphere"></div>
					<div className="indent-line"></div>
				</div>
				<div className="text">
					<p className="intro">Hi, I'm Christian Rullan</p>
					<p>I am a student at the University of Delaware
					studying Computer Science. I have a passion for exploring the intricate world of algorithms, programming languages, 
					and emerging technologies. Throughout my academic journey, I've worked on various projects, scroll down to view some of them...
					</p>
				</div>
				<figure className="sphere1"></figure>
				<figure className="sphere2"></figure>
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
			<section className="projects-screen">
				<Project></Project>
			</section>
		</div>
	);
}
