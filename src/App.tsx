import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { ShellProject } from "./Projects/ShellProject";
import { BeatReal } from "./Projects/BeatReal";
import { Avalanche } from "./Projects/Avalanche";
import { ClassScheduler } from "./Projects/ClassScheduler";
import { Portfolio } from "./Projects/Portfolio";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				></Route>
				<Route
					path="Shell"
					element={<ShellProject />}
				></Route>
				<Route
					path="BeatReal"
					element={<BeatReal />}
				></Route>
				<Route
					path="Avalanche"
					element={<Avalanche />}
				></Route>
				<Route
					path="ClassScheduler"
					element={<ClassScheduler />}
				></Route>
				<Route
					path="Portfolio"
					element={<Portfolio />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
