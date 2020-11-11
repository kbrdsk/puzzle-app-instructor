import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import StudentList from "./student-list";
import PuzzleDisplay from "./puzzle-display";

import "./stylesheets/index.css";

function App() {
	const [students, setStudents] = useState([]);
	const [puzzleDirectory, setPuzzleDirectory] = useState({
		calcudoku: [],
		logic: [],
	});
	useEffect(() => {
		(async () => {
			try {
				await Promise.all(
					Object.keys(puzzleDirectory).map(async (puzzleName) => {
						const instanceListUrl = `${process.env.REACT_APP_API_URL}/puzzles/${puzzleName}`;
						const response = await fetch(instanceListUrl, {
							headers: {
								authorization:
									process.env.REACT_APP_INSTRUCTOR_PW,
							},
						});
						if (response.ok) {
							puzzleDirectory[puzzleName] = await response.json();
						} else {
							console.log(`Http error: ${response.status}`);
						}
					})
				);
				setPuzzleDirectory({ ...puzzleDirectory });
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
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
