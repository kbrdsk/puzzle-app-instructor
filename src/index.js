import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import StudentList from "./student-list";
import PuzzleDisplay from "./puzzle-display";

import "./stylesheets/index.css";

const puzzleDirectory = {
	calcudoku: [
		"4x4beginner1",
		"4x4beginner2",
		"4x4beginner3",
		"4x4beginner4",
		"4x4beginner5",
		"4x4intermediate1",
		"4x4intermediate2",
		"4x4intermediate3",
		"4x4intermediate4",
		"4x4expert1",
		"4x4expert2",
		"4x4expert3",
		"5x5beginner1",
		"5x5beginner2",
		"5x5intermediate1",
	],
	logic: [
		"wolfgoatcabbage",
		"torch",
		"goldboxes",
		"10coins",
		"socks",
		"childrenboat",
		"applesandoranges",
		"averybobbycam",
		"bear",
		"hats",
	],
	light: [
		"small",
		"medium",
		"large",
		"smallx",
		"mediumx",
		"largex",
	].flatMap((instance) =>
		Array.from({ length: 5 }, (...[, i]) => `${instance}${i + 1}`)
	),
	matchstick: [
		"fish",
		"donkey",
		"squares1",
		"squares2",
		"squares3",
		"squares4",
		"squares5",
	],
};

function App() {
	const [students, setStudents] = useState([]);
	return (
		<div className="app">
			<StudentList students={students} setStudents={setStudents} />
			<PuzzleDisplay
				students={students}
				puzzleDirectory={puzzleDirectory}
			/>
		</div>
	);
}

//---------

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
