import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import pic from "../images/cool_rigby.png";

export function ShellProject(): JSX.Element {
	const ShellImages = [pic];
	return (
		<div className="background">
			<h1 className="title">Unix Shell</h1>
			<hr style={{ width: "89%" }}></hr>
			<div className="description-grid-container">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Praesent tristique magna sit amet purus gravida
					quis. Ullamcorper malesuada proin libero nunc consequat
					interdum. Commodo quis imperdiet massa tincidunt nunc
					pulvinar sapien. Adipiscing commodo elit at imperdiet dui
					accumsan sit. Ipsum suspendisse ultrices gravida dictum
					fusce ut placerat orci nulla. Ut aliquam purus sit amet
					luctus venenatis. Adipiscing tristique risus nec feugiat in
					fermentum posuere urna. Tincidunt praesent semper feugiat
					nibh. Libero justo laoreet sit amet. Felis imperdiet proin
					fermentum leo vel orci porta. Feugiat scelerisque varius
					morbi enim nunc. Turpis egestas maecenas pharetra convallis
					posuere morbi leo urna. Posuere urna nec tincidunt praesent
					semper. Donec adipiscing tristique risus nec feugiat in
					fermentum. Condimentum vitae sapien pellentesque habitant.
					Accumsan tortor posuere ac ut consequat semper viverra.
					Mattis enim ut tellus elementum. Aliquam vestibulum morbi
					blandit cursus risus at ultrices. Tempus urna et pharetra
					pharetra massa.
				</p>
				<div className="tag-list">
					<div>Linux</div>
					<div>C</div>
					<div>Memory Allocation</div>
					<div>Pointers</div>
					<div>Linked List</div>
					<div>Command Prompt</div>
					<div>Signals</div>
					<div>Files</div>
					<div>Wildcards</div>
					<div>Arguments</div>
					<div>Environment Variables</div>
				</div>
			</div>
			<div className="gallary">
				<Gallary images={ShellImages}></Gallary>
			</div>
		</div>
	);
}
