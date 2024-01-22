import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import AvalDemo from "../Resources/AvalResources/Avalanche_Demo.mp4";
import pic1 from "../Resources/AvalResources/1.png";
import pic2 from "../Resources/AvalResources/2.png";
import pic3 from "../Resources/AvalResources/3.png";
import pic4 from "../Resources/AvalResources/4.png";

export function Avalanche(): JSX.Element {
	let AvalImages: string[] = [pic1, pic2, pic3, pic4];
	const AvalVideos: string[] = [AvalDemo];
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
					<a
						href="https://github.com/AidanTran/Avalanche"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "cyan", fontSize: "smaller", textDecoration: "underline"}}
					>
						github.com/Avalanche
					</a>
					<br></br>
					<a
						href="https://aidantran.github.io/Avalanche/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "cyan", fontSize: "smaller", textDecoration: "underline"}}
					>
						Play the game
					</a>
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
			<div className="gallary"><Gallary images={AvalImages} videos={AvalVideos}></Gallary></div>
		</div>
	);
}
