import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Projects.css";

export function Project(): JSX.Element {
	return (
		<div
			id="projects-section-id"
			className="projects-container"
		>
			<div className="grid">
				<Link to={"/shell"}>
					<div></div>
					<div></div>
				</Link>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
