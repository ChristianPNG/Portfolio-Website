import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { ShellProject } from "./Projects/ShellProject";
import { BeatReal } from "./Projects/BeatReal";
import { Avalanche } from "./Projects/Avalanche";
import { ClassScheduler } from "./Projects/ClassScheduler";
import { Portfolio } from "./Projects/Portfolio";
import { About } from "./Components/About";
import { BashTheDungeon } from "./Projects/BashTheDungeon";
import { EventFinder } from "./Projects/EventFinder";
import { CIVAM } from "./Projects/CIVAM";

function App() {
    const uri = window.location.pathname;
    console.log(uri);
    return (
        <BrowserRouter basename={uri}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="Shell" element={<ShellProject />}></Route>
                <Route path="BeatReal" element={<BeatReal />}></Route>
                <Route path="Avalanche" element={<Avalanche />}></Route>
                <Route
                    path="ClassScheduler"
                    element={<ClassScheduler />}
                ></Route>
                <Route path="Portfolio" element={<Portfolio />}></Route>
                <Route path="About" element={<About />}></Route>
                <Route path="EventFinder" element={<EventFinder />}></Route>
                <Route path="Dungeon" element={<BashTheDungeon />}></Route>
                <Route path="CIVAM" element={<CIVAM />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
