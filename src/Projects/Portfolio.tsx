import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/PortfolioResources/Portoflio_Demo.mp4";
import pic1 from "../Resources/PortfolioResources/1.png";
import pic2 from "../Resources/PortfolioResources/2.png";
import pic3 from "../Resources/PortfolioResources/3.png";

export function Portfolio(): JSX.Element {
    let PortfolioImages: string[] = [pic1, pic2, pic3];
    const PortfolioVideos: string[] = [demo];
    return (
        <div className="background">
            <h1 className="title">Portfolio Website</h1>
            <hr style={{ width: "89%" }}></hr>
            <div className="description-grid-container">
                <p>
                    <ul>
                        <li>
                            Developed an engaging portfolio website utilizing
                            React, Typescript, HTML, CSS featuring a unique
                            display for each project, enhancing user experience
                            and navigation.
                        </li>
                        <li>
                            Designed aesthetically pleasing layouts and user
                            interfaces for showcasing software projects,
                            incorporating GIF demos and static images to provide
                            comprehensive project overviews.
                        </li>
                        <li>
                            Implemented connections to GitHub repositories for
                            each project, allowing visitors to access source
                            code
                        </li>
                        <li>
                            Integrated client-side routing using frameworks like
                            React Router, enabling smooth navigation between
                            project pages without the need for page reloads
                        </li>
                    </ul>
                    <a
                        href="https://github.com/ChristianPNG/Portfolio-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "cyan",
                            fontSize: "smaller",
                            textDecoration: "underline",
                        }}
                    >
                        github.com/Portfolio_Website
                    </a>
                </p>
                <div className="tag-list">
                    <div>Typescript</div>
                    <div>Routing</div>
                    <div>CSS</div>
                    <div>GIFS</div>
                    <div>Github</div>
                    <div>React</div>
                </div>
            </div>
            <div className="gallary">
                <Gallary
                    images={PortfolioImages}
                    videos={PortfolioVideos}
                ></Gallary>
            </div>
        </div>
    );
}
