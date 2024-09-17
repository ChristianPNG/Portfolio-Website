import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/SchedulerResources/Scheduler_Demo.mp4";
import pic1 from "../Resources/SchedulerResources/1.png";
import pic2 from "../Resources/SchedulerResources/2.png";
import pic3 from "../Resources/SchedulerResources/3.png";
import pic4 from "../Resources/SchedulerResources/4.png";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export function ClassScheduler(): JSX.Element {
    let SchedulerImages: string[] = [pic1, pic2, pic3, pic4];
    const SchedulerVideos: string[] = [demo];
    return (
        <div className="background">
            <div className="title">
                <span className="home">
                    <Link to={"/"}>
                        <FaHouse />
                    </Link>
                </span>
                <span style={{ marginRight: "24pt" }}>Class Scheduler</span>
            </div>
            <hr style={{ width: "89%" }}></hr>
            <div className="description-grid-container">
                <p>
                    <ul>
                        <li>
                            Collaborated with another student using React to
                            develop a class scheduler using data from every
                            class in UD
                        </li>
                        <li>
                            Incorporated features such as saving progress
                            throughout multiple sessions, creating multiple
                            schedules, class searching, editing classes, editing
                            semesters, and selecting tracks for CS majors
                        </li>
                        <li>
                            Utilized agile framework such as doing sprints and
                            having a product backlog. Totaled 70+ commits
                        </li>
                        <li>
                            Tested the site through the Jest testing framework
                            resulting in large code coverage and consistency.
                        </li>
                    </ul>
                    <a
                        href="https://github.com/UD-CISC275-S22/cis-scheduler-team-21"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "cyan",
                            fontSize: "smaller",
                            textDecoration: "underline",
                        }}
                    >
                        github.com/CIS-Scheduler
                    </a>
                </p>
                <div className="tag-list">
                    <div>Typescript</div>
                    <div>Agile</div>
                    <div>Jest</div>
                    <div>Unit Testing</div>
                    <div>Github</div>
                    <div>JSON</div>
                    <div>React</div>
                </div>
            </div>
            <div className="gallary">
                <Gallary
                    images={SchedulerImages}
                    videos={SchedulerVideos}
                ></Gallary>
            </div>
        </div>
    );
}
