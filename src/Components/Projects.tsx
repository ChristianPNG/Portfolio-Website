import React from "react";
import "../ComponentsCSS/Projects.css";

export function Project(): JSX.Element {
	return (
		<div
			id="projects-section-id"
			className="projects-container"
		>
			<div className="grid">
				<div className="grid-item">Item 1</div>
				<div className="grid-item">Item 2</div>
				<div className="grid-item">Item 3</div>
				<div className="grid-item">Item 4</div>
				<div className="grid-item">Item 5</div>
				<div className="grid-item">Item 6</div>
			</div>
		</div>
	);
}
