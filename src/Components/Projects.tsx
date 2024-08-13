import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Projects.css";
import ShellDemo from "../Resources/Unix_Shell_Demo.mp4";
import AvalDemo from "../Resources/AvalResources/Avalanche_Demo.mp4";
import BeatRealDemo from "../Resources/BeatRealResources/beatreal_demo.mp4";
import SchedulerDemo from "../Resources/SchedulerResources/5.png";
import EventFinderDemo from "../Resources/EventFinderResources/EventFinderVod.mp4";
import CivamImage from "../Resources/CivamResources/1.png";
import DungeonDemo from "../Resources/DungeonResources/1.png";

export function Project(): JSX.Element {
    return (
        <div className="projects-container">
            <div className="grid" id="projects-section-id">
                <Link to={"/Shell"}>
                    <div>
                        <video
                            src={ShellDemo}
                            autoPlay={true}
                            muted
                            loop
                            width="100%"
                            height="100%"
                        ></video>
                    </div>
                    <div className="center-text">Unix Shell</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>C</div>
                        <div>Linux</div>
                        <div>Bash</div>
                    </div>
                </Link>
                <Link to={"/BeatReal"}>
                    <div>
                        <video
                            src={BeatRealDemo}
                            autoPlay={true}
                            muted
                            loop
                            width="100%"
                            height="100%"
                        ></video>
                    </div>
                    <div className="center-text">BeatReal</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>Fullstack</div>
                        <div>Angular</div>
                        <div>MongoDB</div>
                        <div>Team</div>
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
                    <div className="center-text">Avalanche</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Javascript</div>
                    </div>
                </Link>
                <Link to={"/Dungeon"}>
                    <div>
                        <img
                            src={DungeonDemo}
                            width="100%"
                            height="100%"
                            alt=""
                        ></img>
                    </div>
                    <div className="center-text">Bash The Dungeon</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>Phaser</div>
                        <div>Typescript</div>
                        <div>Tile Mapping</div>
                    </div>
                </Link>
                <Link to={"/CIVAM"}>
                    <div>
                        <img
                            src={CivamImage}
                            width="100%"
                            height="100%"
                            alt=""
                        />
                    </div>
                    <div className="center-text">CIVAM</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>Client</div>
                        <div>Debugging</div>
                        <div>Angular</div>
                        <div>Django</div>
                    </div>
                </Link>
                <Link to={"/EventFinder"}>
                    <div>
                        <video
                            src={EventFinderDemo}
                            autoPlay={true}
                            muted
                            loop
                            width="100%"
                            height="100%"
                        ></video>
                    </div>
                    <div className="center-text">Event Finder</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>Fullstack</div>
                        <div>Java</div>
                        <div>SpringBoot</div>
                        <div>SQLdeveloper</div>
                        <div>React</div>
                    </div>
                </Link>

                <Link to={"/ClassScheduler"} className="box-4">
                    <div>
                        <img
                            src={SchedulerDemo}
                            width="100%"
                            height="100%"
                            alt=""
                        ></img>
                    </div>
                    <div className="center-text">UD Class Scheduler</div>
                    <div
                        className="tag-list"
                        style={{ fontSize: "9pt", justifyContent: "center" }}
                    >
                        <div>Frontend</div>
                        <div>JSON</div>
                        <div>React</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
