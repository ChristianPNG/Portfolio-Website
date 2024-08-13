import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import pic1 from "../Resources/CivamResources/1.png";
import pic2 from "../Resources/CivamResources/2.png";
import pic3 from "../Resources/CivamResources/3.png";
import pic4 from "../Resources/CivamResources/4.png";
import pic5 from "../Resources/CivamResources/5.png";

export function CIVAM(): JSX.Element {
    let CivamImages: string[] = [pic1, pic2, pic3, pic4, pic5];
    const CivamVideos: string[] = [];
    return (
        <div>
            <div className="background">
                <h1 className="title">CIVAM</h1>
                <hr style={{ width: "87%" }}></hr>
                <div className="description-grid-container">
                    <p>
                        <ul>
                            <li>
                                Collaborated effectively with the client to
                                understand their needs and requirements. Worked
                                closely with the team to ensure comprehensive
                                solutions, maintaining clear communication and
                                delivering results that enhanced the
                                functionality and stability of the client's
                                large collection/museum site
                            </li>
                            <li>
                                Led debugging efforts by resolving multiple
                                critical server errors on the live production
                                site by meticulously debugging a large Angular
                                codebase and identifying the issue in the AWS
                                console, enabling image and video uploads for
                                the client's museum site
                            </li>
                            <li>
                                Fixed development and local deployment issues by
                                updating outdated and incompatible technologies,
                                ensuring a stable development environment and
                                facilitating ongoing development work.
                            </li>
                            <li>
                                Configured a new iOS local development build by
                                setting up virtual machines and network
                                configurations, allowing for effective iOS
                                frontend changes and enhancements on the
                                client's large museum site.
                            </li>
                        </ul>
                        <a
                            href="https://civam-mt.org/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "cyan",
                                fontSize: "smaller",
                                textDecoration: "underline",
                            }}
                        >
                            CIVAM site
                        </a>
                    </p>
                    <div className="tag-list">
                        <div>Client</div>
                        <div>Debugging</div>
                        <div>Angular</div>
                        <div>Django</div>
                        <div>AWS</div>
                        <div>IOS</div>
                        <div>Virtual Machines</div>
                        <div>Documentation</div>
                        <div>Collaborative</div>
                    </div>
                </div>
                <div className="gallary">
                    <Gallary
                        images={CivamImages}
                        videos={CivamVideos}
                    ></Gallary>
                </div>
            </div>
        </div>
    );
}
