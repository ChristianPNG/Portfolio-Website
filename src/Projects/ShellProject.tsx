import React from "react";
import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
//import pic from "../Resources/cool_rigby.png";
import ShellDemo from "../Resources/Unix_Shell_Demo.mp4";
import pic1 from "../Resources/ShellResources/1.png";
import pic2 from "../Resources/ShellResources/2.png";
import pic3 from "../Resources/ShellResources/3.png";
import pic4 from "../Resources/ShellResources/4.png";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export function ShellProject(): JSX.Element {
    let ShellImages: string[] = [pic1, pic2, pic3, pic4];
    const ShellVideos: string[] = [ShellDemo];
    return (
        <div className="background">
            <div className="title">
                <span className="home">
                    <Link to={"/"}>
                        <FaHouse />
                    </Link>
                </span>
                <span style={{ marginRight: "24pt" }}>Unix Shell</span>
            </div>
            <hr style={{ width: "89%" }}></hr>
            <div className="description-grid-container">
                <p>
                    A feature-rich Unix shell that combines the robustness of a
                    traditional Linux shell with innovative new capabilities. It
                    is designed to provide a seamless and enhanced command-line
                    interface. Project was built using C and window's subsystem
                    for linux. <br></br>
                    <ul>
                        <li>
                            Developed solo on a mock Unix Shell/Command prompt
                            that is executable through Linux
                        </li>
                        <li>
                            Implemented features similar to normal Linux
                            commands such as ls, pwd, nano, cd, etc.
                        </li>
                        <li>
                            Supported functionality for wildcards (*, ?) and
                            signal handling (CTRL-C)
                        </li>
                        <li>
                            Added additional functionality for its own unique
                            set of commands like setting/getting environmental
                            variables and customizable prompt prefix.
                        </li>
                    </ul>
                    <a
                        href="https://github.com/ChristianPNG/UnixShell"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "cyan",
                            fontSize: "smaller",
                            textDecoration: "underline",
                        }}
                    >
                        github/UnixShell.com
                    </a>
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
                </div>
            </div>
            <div className="gallary">
                <Gallary images={ShellImages} videos={ShellVideos}></Gallary>
            </div>
        </div>
    );
}
