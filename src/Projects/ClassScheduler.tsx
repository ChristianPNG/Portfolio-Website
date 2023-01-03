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
				<div className="tag-list"></div>
			</div>
			<div className="gallary">
				<Gallary></Gallary>
			</div>
		</div>
	);
}
