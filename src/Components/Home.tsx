import React from "react";
import "../ComponentsCSS/Home.css";

export function Home() {
	return (
		<div className="container">
			<section className="title-background">
				<figure className="sphere1"></figure>
				<figure className="sphere2"></figure>
				<div className="title-content">
					<div className="header">
						<button>Projects</button>
						<button>About</button>
						<button>&#9789;</button>
					</div>
					<h1>Christian Rullan</h1>
				</div>
			</section>
			<section className="projects-screen">
				<h1>Christian Rullan</h1>
			</section>
		</div>
	);
}
