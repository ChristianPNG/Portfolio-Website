import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/EventFinderResources/EventFinderVod.mp4";
import pic1 from "../Resources/EventFinderResources/1.png";
import pic2 from "../Resources/EventFinderResources/2.png";
import pic3 from "../Resources/EventFinderResources/3.png";
import pic4 from "../Resources/EventFinderResources/4.png";
import pic5 from "../Resources/EventFinderResources/5.png";

export function EventFinder(): JSX.Element {
    let EventImages: string[] = [pic1, pic2, pic3, pic4, pic5];
    const EventVideos: string[] = [demo];
    return (
        <div>
            <div className="background">
                <h1 className="title">EventFinder</h1>
                <hr style={{ width: "87%" }}></hr>
                <div className="description-grid-container">
                    <p>
                        <ul>
                            <li>
                                Engineered a full-stack web application using
                                Spring Boot Java for the backend and React for
                                the frontend, delivering a seamless and
                                interactive user experience.
                            </li>
                            <li>
                                Integrated the Ticketmaster API to enhance event
                                discovery, allowing users to search and retrieve
                                events from a wide range of sources.
                            </li>
                            <li>
                                Implemented JPA (Java Persistence API) for
                                managing complex data relationships, including a
                                many-to-many mapping between users and events,
                                with SQL and Oracle Express ensuring a robust
                                database operations.
                            </li>
                            <li>
                                Developed advanced search functionality and user
                                features, including event filtering by city and
                                artist, saving events, and managing a
                                personalized profile with dedicated views for
                                events and artists.
                            </li>
                        </ul>
                        <a
                            href="https://github.com/ChristianPNG/EventFinder"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "cyan",
                                fontSize: "smaller",
                                textDecoration: "underline",
                            }}
                        >
                            github.com/EventFinder
                        </a>
                    </p>
                    <div className="tag-list">
                        <div>Fullstack</div>
                        <div>Java</div>
                        <div>SpringBoot</div>
                        <div>SQLDeveloper</div>
                        <div>Oracle XE</div>
                        <div>API</div>
                        <div>Login</div>
                        <div>React</div>
                        <div>Hashmaps</div>
                        <div>Arrays</div>
                    </div>
                </div>
                <div className="gallary">
                    <Gallary
                        images={EventImages}
                        videos={EventVideos}
                    ></Gallary>
                </div>
            </div>
        </div>
    );
}
