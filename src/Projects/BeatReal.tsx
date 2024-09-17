import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/BeatRealResources/beatreal_demo.mp4";
import pic1 from "../Resources/BeatRealResources/1.png";
import pic2 from "../Resources/BeatRealResources/2.png";
import pic3 from "../Resources/BeatRealResources/3.png";
import pic4 from "../Resources/BeatRealResources/4.png";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export function BeatReal(): JSX.Element {
    let BeatRealImages: string[] = [pic1, pic2, pic3, pic4];
    const BeatRealVideos: string[] = [demo];
    return (
        <div className="background">
            <div className="title">
                <span className="home">
                    <Link to={"/"}>
                        <FaHouse />
                    </Link>
                </span>
                <span style={{ marginRight: "24pt" }}>BeatReal</span>
            </div>{" "}
            <hr style={{ width: "89%" }}></hr>
            <div className="description-grid-container">
                <p>
                    <ul>
                        <li>
                            Help develop a social media site using MEAN stack
                            that incorporated music and Spotify
                        </li>
                        <li>
                            Collaborated in a group of 4 other people using git
                            and GitHub as our version control
                        </li>
                        <li>
                            Created both a front-end and back-end. Back-end
                            interacted with the NoSQL database MongoDB with CRUD
                            operations. These dealt with organizing user
                            information such as usernames, friends, etc.
                            included nested data such as posts and comments
                        </li>
                        <li>
                            Front-end involved creating a sleek user interface
                            for the profile, reels, and comment sections.
                        </li>
                    </ul>
                    <a
                        href="https://github.com/swetha-sankar/BeatReal-Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "cyan",
                            fontSize: "smaller",
                            textDecoration: "underline",
                        }}
                    >
                        github.com/BeatReal-FrontEnd
                    </a>
                    <br></br>
                    <a
                        href="https://github.com/swetha-sankar/BeatReal"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "cyan",
                            fontSize: "smaller",
                            textDecoration: "underline",
                        }}
                    >
                        github.com/BeatReal-BackEnd
                    </a>
                </p>
                <div className="tag-list">
                    <div>API</div>
                    <div>Angular</div>
                    <div>Front-End</div>
                    <div>Back-End</div>
                    <div>Express</div>
                    <div>Axios</div>
                    <div>MongoDB</div>
                    <div>NodeJS</div>
                </div>
            </div>
            <div className="gallary">
                <Gallary
                    images={BeatRealImages}
                    videos={BeatRealVideos}
                ></Gallary>
            </div>
        </div>
    );
}
