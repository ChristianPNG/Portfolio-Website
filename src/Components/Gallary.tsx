import React, { useState } from "react";
import "../ComponentsCSS/Gallary.css";

export function Gallary(): JSX.Element {
	const [visible, setVisible] = useState(false);
	let selectedItem: HTMLElement | null = null;
	function enlarge(id: string) {
		selectedItem = document.getElementById(id);
		selectedItem!.classList.add("enlarge");
		selectedItem!.classList.remove("item");
		setVisible(true);
	}
	function close() {
		selectedItem!.classList.add("item");
		selectedItem!.classList.remove("enlarge");
	}
	return (
		<div className="viewport">
			<ul className="list">
				<li
					id="1"
					className="item"
					onClick={() => enlarge("1")}
				>
					1
				</li>
				<li className="item">2</li>
				<li className="item">3</li>
				<li className="item">4</li>
				<li className="item">5</li>
				<li className="item">6</li>
				<li className="item">7</li>
				<li className="item">8</li>
				<li className="item">9</li>
				<li className="item">10</li>
				<li className="item">11</li>
				<li className="item">12</li>
			</ul>
			{visible && (
				<div
					className="close-button"
					onClick={close}
				>
					&#10005;
				</div>
			)}
		</div>
	);
}
