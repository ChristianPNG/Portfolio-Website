import React, { useState } from "react";
import "../ComponentsCSS/Gallary.css";

interface props {
	images: string[];
}

export function Gallary({ images }: props): JSX.Element {
	const [enlargedImageUrl, setEnlargedImageUrl] = useState<string | null>(
		null
	);

	function enlarge(img: string) {
		setEnlargedImageUrl(img);
	}
	function close() {
		setEnlargedImageUrl(null);
	}
	return (
		<div
			className="viewport"
			id="viewport"
		>
			<ul className="list">
				{images.map((img) => (
					<img
						src={img}
						alt=""
						className="item"
						onClick={() => enlarge(img)}
					/>
				))}
			</ul>
			{enlargedImageUrl && (
				<div className="enlarged-image-container">
					<img
						className="enlarge"
						src={enlargedImageUrl}
						alt=""
					/>
					<button
						className="close-button"
						onClick={close}
					>
						X
					</button>
				</div>
			)}
		</div>
	);
}
