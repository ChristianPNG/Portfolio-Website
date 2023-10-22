import React, { useState } from "react";
import "../ComponentsCSS/Gallary.css";

/*creating interfaces to allow the passage of data from one 
  component to another. Here the path string is being passed
  as input. 
*/
interface ImgProps {
	images: string[];
	videos: string[];
}

export function Gallary({ images, videos }: ImgProps): JSX.Element {
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
				{videos.map((vid) => (
					<video
						className="item"
						style={{ width: "355px" }}
						src={vid}
						autoPlay={true}
						muted
						loop
						onClick={() => enlarge(vid)}
					>
						{"Browser doesn't support video..."}
					</video>
				))}
				{images.map((img) => (
					<img
						src={img}
						alt=""
						className="item"
						onClick={() => enlarge(img)}
					/>
				))}
			</ul>
			{enlargedImageUrl != null && (
				<div
					className="enlarged-image-container"
					onClick={() => close()}
				>
					{enlargedImageUrl.endsWith(".mp4") ? (
						<video
							className="enlarge"
							src={enlargedImageUrl}
							autoPlay={true}
							muted
							loop
						>
							{"Browser doesn't support video..."}
						</video>
					) : (
						<img
							className="enlarge"
							src={enlargedImageUrl}
							alt=""
						/>
					)}
				</div>
			)}
		</div>
	);
}
