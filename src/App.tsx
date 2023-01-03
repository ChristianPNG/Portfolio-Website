import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { ShellProject } from "./Projects/ShellProject";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				></Route>
				<Route
					path="shell"
					element={<ShellProject />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
