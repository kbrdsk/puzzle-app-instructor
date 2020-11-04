import React, { useState } from "react";
import ReactDOM from "react-dom";

import StudentList from "./student-list";
import PuzzleDisplay from "./puzzle-display";

import "./stylesheets/index.css";

function App() {
	const [students, setStudents] = useState([
		{ first: "kabirdas", last: "henry", active: true },
		{ first: "naomi", last: "henry", active: false },
	]);
	return (
		<div className="app">
			<StudentList students={students} setStudents={setStudents} />
			<PuzzleDisplay students={students} />
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
