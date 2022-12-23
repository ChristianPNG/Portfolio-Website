import React from "react";
import "../ComponentsCSS/Home.css";
import "../App.css";
import { Project } from "./Projects";

export function Home(): JSX.Element {
	function scrollToProj(): void {
		document
			.getElementById("projects-section-id")!
			.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<div className="container">
			<section className="title-background">
				<figure className="sphere1"></figure>
				<figure className="sphere2"></figure>
				<div className="title-content">
					<div className="header">
						<button onClick={scrollToProj}>Projects</button>
						<button>About</button>
						<button>&#9789;</button>
					</div>
					<h1>Christian Rullan</h1>
				</div>
			</section>
			<section className="projects-screen">
				<Project></Project>
			</section>
		</div>
	);
}
