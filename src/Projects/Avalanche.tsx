import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";

export function Avalanche(): JSX.Element {
	return (
		<div className="background">
			<h1 className="title">Avalanche</h1>
			<hr style={{ width: "89%" }}></hr>
			<div className="description-grid-container">
				<p>
					<ul>
						<li>Collaborative game development of a simple yet smooth flash game about a marshmallow trying to get
						the highest score possible by climbing falling blocks</li>
						<li>Game can be ran at high frame rates with smooth movement and collision detection</li>
						<li>Designed with no added libraries and only on simple js and css</li>
					</ul>
				</p>
				<div className="tag-list">
					<div>CSS</div>
					<div>HTML</div>
					<div>Sound Design</div>
					<div>Game Design</div>
					<div>Engine</div>
					<div>Collision Detection</div>
				</div>
			</div>
			<div className="gallary"><Gallary images={[]} videos={[]}></Gallary></div>
		</div>
	);
}
