import React, { useEffect, useState } from "react";

import Calcudoku from "./templates/calcudoku";

export default function PuzzleDisplay({ students }) {
	const [puzzleData, setPuzzleData] = useState(new Map());

	const fetchStudentPuzzleData = async (student) => {
		const { first, last } = student;
		const url = `${process.env.REACT_APP_API_URL}/students/${first}_${last}/activepuzzle`;
		const response = await fetch(url, {
			headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
		});
		const data = await response.json();
		console.log(data);
		return [student, data];
	};

	useEffect(() => {
		const activeStudents = students.filter((student) => student.active);
		(async () => {
			const data = await Promise.all(
				activeStudents.map(fetchStudentPuzzleData)
			);
			setPuzzleData(new Map(data));
		})();
	}, [students]);

	const renderStudentPuzzle = (student) => {
		let puzzleComponent;
		const { puzzleName, ...data } = puzzleData.get(student);
		const { first, last } = student;
		switch (puzzleName) {
			case "calcudoku":
				puzzleComponent = <Calcudoku data={data} />;
				break;
			default:
				puzzleComponent = null;
		}
		return (
			<li key={`${first}_${last}`}>
				<div className="student-name">
					{first} {last}
				</div>
				{puzzleComponent}
			</li>
		);
	};

	return <ul>{Array.from(puzzleData.keys()).map(renderStudentPuzzle)}</ul>;
}
