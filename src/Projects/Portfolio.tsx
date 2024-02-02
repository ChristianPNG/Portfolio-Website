import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/PortfolioResources/Portoflio_Demo.mp4"
import pic1 from "../Resources/PortfolioResources/1.png";
import pic2 from "../Resources/PortfolioResources/2.png";
import pic3 from "../Resources/PortfolioResources/3.png";

export function Portfolio(): JSX.Element {
	let PortfolioImages: string[] = [pic1, pic2, pic3];
	const PortfolioVideos: string[] = [demo];
	return (
		<div className="background">
			<h1 className="title">Portfolio Website</h1>
			<hr style={{ width: "89%" }}></hr>
			<div className="description-grid-container">
			<p>
					<ul>
						<li>Collaborated with another student using React to develop a class scheduler using data from every
						class in UD</li>
						<li>Incorporated features such as saving progress throughout multiple sessions, creating multiple
						schedules, class searching, editing classes, editing semesters, and selecting tracks for CS majors</li>
						<li>Utilized agile framework such as doing sprints and having a product backlog. Totaled 70+ commits</li>
						<li>Tested the site through the Jest testing framework resulting in large code coverage and consistency.</li>
					</ul>
					<a
						href="https://github.com/ChristianPNG/Portfolio-Website"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "cyan", fontSize: "smaller", textDecoration: "underline"}}
					>
						github.com/Portfolio_Website
					</a>
				</p>
				<div className="tag-list">
					<div>Typescript</div>
					<div>Agile</div>
					<div>Jest</div>
					<div>Unit Testing</div>
					<div>Github</div>
					<div>JSON</div>
					<div>React</div>
				</div>
			</div>
			<div className="gallary"><Gallary
					images={PortfolioImages}
					videos={PortfolioVideos}
				></Gallary></div>
		</div>
	);
}
