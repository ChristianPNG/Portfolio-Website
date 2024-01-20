import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";

export function ClassScheduler(): JSX.Element {
	return ( 
		<div className="background">
			<h1 className="title">Class Scheduler</h1>
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
			<div className="gallary"></div>
		</div>
	);
}
