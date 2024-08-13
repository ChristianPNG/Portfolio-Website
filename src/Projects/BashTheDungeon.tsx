import { Gallary } from "../Components/Gallary";
import "../ComponentsCSS/Project-Description.css";
import demo from "../Resources/DungeonResources/BashTheDungeonVod.mp4";
import pic1 from "../Resources/DungeonResources/1.png";
import pic2 from "../Resources/DungeonResources/2.png";
import pic3 from "../Resources/DungeonResources/3.png";
import pic4 from "../Resources/DungeonResources/4.png";

export function BashTheDungeon(): JSX.Element {
    let BeatRealImages: string[] = [pic1, pic2, pic3, pic4];
    const BeatRealVideos: string[] = [demo];
    return (
        <div>
            <div className="background">
                <h1 className="title">Bash The Dungeon</h1>
                <hr style={{ width: "87%" }}></hr>
                <div className="description-grid-container">
                    <p>
                        <ul>
                            <li>
                                Developed an educational game in Phaser using
                                TypeScript, designed to teach the basics of Bash
                                scripting through interactive dungeon
                                exploration, enhancing both programming and
                                critical thinking skills.
                            </li>
                            <li>
                                Collaborated closely with a partner to implement
                                game mechanics that simulate real-world Bash
                                commands, providing users with hands-on
                                experience in a fun and engaging environment.
                            </li>
                            <li>
                                Integrated various Bash commands into the
                                gameplay to reinforce key concepts, making the
                                learning process more intuitive and memorable
                                for players of all skill levels.
                            </li>
                            <li>
                                Utilized Phaser's robust framework to create a
                                responsive and visually appealing game, ensuring
                                a smooth user experience across different
                                platforms while maintaining the educational
                                focus of the project.
                            </li>
                        </ul>
                        <a
                            href="https://github.com/ChristianPNG/BashTheDungeon"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "cyan",
                                fontSize: "smaller",
                                textDecoration: "underline",
                            }}
                        >
                            github.com/BashTheDungeon
                        </a>
                        <br></br>
                        <a
                            href="https://ud-s24-cisc374.github.io/final-project-red/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "cyan",
                                fontSize: "smaller",
                                textDecoration: "underline",
                            }}
                        >
                            Play The Game
                        </a>
                    </p>
                    <div className="tag-list">
                        <div>Phaser</div>
                        <div>Typescript</div>
                        <div>Tile Mapping</div>
                        <div>Bash commands</div>
                        <div>Animation</div>
                        <div>Map Design</div>
                        <div>Data Structures</div>
                        <div>Collision</div>
                        <div>Interactive</div>
                    </div>
                </div>
                <div className="gallary">
                    <Gallary
                        images={BeatRealImages}
                        videos={BeatRealVideos}
                    ></Gallary>
                </div>
            </div>
        </div>
    );
}
