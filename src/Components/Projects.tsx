import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Projects.css";
import ShellDemo from "../Resources/Unix_Shell_Demo.mp4";
import AvalDemo from "../Resources/AvalResources/Avalanche_Demo.mp4";
import { Avalanche } from '../Projects/Avalanche';


export function Project(): JSX.Element {
	return (
		<div className="projects-container">
			<div
				className="grid"
				id="projects-section-id"
			>
				<Link to={"/Shell"}>
					<div>
						<video
							
							src={ShellDemo}
							autoPlay={true}
							muted
							loop
							width="100%"
							height="100%"
						>
							
						</video>
					</div>
					<div className="center-text">
						Unix Shell
					</div>
				</Link>
				<Link to={"/BeatReal"}>
					<div style={{ height: "100%" }}>yes</div>
					<div></div>
				</Link>
				<Link to={"/Avalanche"}>
					<div>
						<video
							src={AvalDemo}
							autoPlay={true}
							muted
							loop
							width="100%"
							height="100%"
						></video>
					</div>
					<div className="center-text">
						Avalanche
					</div>
				</Link>
				<Link
					to={"/ClassScheduler"}
					className="box-4"
				>
					<div>yes</div>
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
