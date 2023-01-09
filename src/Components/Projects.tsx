import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Projects.css";

export function Project(): JSX.Element {
	return (
		<div className="projects-container">
			<div
				className="grid"
				id="projects-section-id"
			>
				<Link to={"/Shell"}>
					<div></div>
					<div></div>
				</Link>
				<Link to={"/BeatReal"}>
					<div></div>
					<div></div>
				</Link>
				<Link to={"/Avalanche"}>
					<div></div>
					<div></div>
				</Link>
				<Link
					to={"/ClassScheduler"}
					className="box-4"
				>
					<div></div>
					<div></div>
				</Link>
				<Link
					to={"/Portfolio"}
					className="box-5"
				>
					<div></div>
					<div></div>
				</Link>
			</div>
		</div>
	);
}
