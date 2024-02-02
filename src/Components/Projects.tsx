import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Projects.css";
import ShellDemo from "../Resources/Unix_Shell_Demo.mp4";
import AvalDemo from "../Resources/AvalResources/Avalanche_Demo.mp4";
import BeatRealDemo from "../Resources/BeatRealResources/beatreal_demo.mp4"
import SchedulerDemo from "../Resources/SchedulerResources/Scheduler_Demo.mp4"
import PortfolioDemo from "../Resources/PortfolioResources/Portoflio_Demo.mp4"


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
					<div><video
							src={BeatRealDemo}
							autoPlay={true}
							muted
							loop
							width="100%"
							height="100%"
						></video></div>
					<div className="center-text">
						BeatReal
					</div>
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
					<div><video
							src={SchedulerDemo}
							autoPlay={true}
							muted
							loop
							width="100%"
							height="100%"
						></video>
					</div>
					<div className="center-text">
						UD Class Scheduler
					</div>
				</Link>
				<Link
					to={"/Portfolio"}
					className="box-5"
				>
					<div><video
						src={PortfolioDemo}
						autoPlay={true}
						muted
						loop
						width="100%"
						height="100%"
					></video></div>
					<div className="center-text">Portfolio Website</div>
				</Link>
			</div>
		</div>
	);
}
