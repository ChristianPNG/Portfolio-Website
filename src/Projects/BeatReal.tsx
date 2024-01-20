import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";

export function BeatReal(): JSX.Element {
	return (
		<div className="background">
			<h1 className="title">Beat Real</h1>
			<hr style={{ width: "89%" }}></hr>
			<div className="description-grid-container">
				<p>
					<ul>
						<li>Help develop a social media site using MEAN stack that incorporated music and Spotify</li>
						<li>Collaborated in a group of 4 other people using git and GitHub as our version control</li>
						<li>Created both a front-end and back-end. Back-end interacted with the NoSQL database MongoDB
						with CRUD operations. These dealt with organizing user information such as usernames, friends, etc.
						included nested data such as posts and comments</li>
						<li>Front-end involved creating a sleek user interface for the profile, reels, and comment sections.</li>
					</ul>
				</p>
				<div className="tag-list">				
					<div>API</div>
					<div>Angular</div>
					<div>Front-End</div>
					<div>Back-End</div>
					<div>Express</div>
					<div>Axios</div>
					<div>MongoDB</div>
					<div>NodeJS</div></div>
				</div>
			<div className="gallary"><Gallary images={[]} videos={[]}></Gallary></div>
		</div>
	);
}
