import React, { useEffect, useState, useCallback, useMemo } from "react";

import Calcudoku from "./templates/calcudoku";

const puzzleComponents = {
	calcudoku: (data) => <Calcudoku data={data} />,
};

const fetchDefaults = {
	activepuzzle: true,
	puzzleName: "calcudoku",
	puzzleId: "sample",
};

export default function PuzzleDisplay(props) {
	const [puzzleData, setPuzzleData] = useState(new Map());
	const [fetchInfo, setFetchInfo] = useState(new Map());
	const activeStudents = useMemo(
		() => props.students.filter((student) => student.active),
		[props.students]
	);

	//set defaults for newly fetched students
	useEffect(() => {
		setFetchInfo((oldFetchInfo) => {
			const newFetchInfo = new Map(oldFetchInfo);
			props.students.forEach((student) => {
				if (!newFetchInfo.has(student))
					newFetchInfo.set(student, fetchDefaults);
			});
			return newFetchInfo;
		});
	}, [props.students, setFetchInfo]);

	const fetchStudentPuzzleData = useCallback(
		async (student) => {
			const { first, last } = student;
			const { activepuzzle, puzzleName, puzzleId } = fetchInfo.get(
				student
			);
			const puzzleuri = activepuzzle
				? "activepuzzle"
				: `${puzzleName}/${puzzleId}`;
			const url =
				process.env.REACT_APP_API_URL +
				`/students/${first}_${last}/${puzzleuri}`;
			const response = await fetch(url, {
				headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
			});
			return await response.json();
		},
		[fetchInfo]
	);

	//refresh puzzle data
	useEffect(() => {
		(async () => {
			const dataUpdates = await Promise.all(
				activeStudents.map(async (student) => {
					const data = await fetchStudentPuzzleData(student);
					return [student, data];
				})
			);
			setPuzzleData((oldPuzzleData) => {
				const newPuzzleData = new Map(oldPuzzleData);
				dataUpdates.forEach((data) => newPuzzleData.set(...data));
				return newPuzzleData;
			});
			console.log("refreshed");
		})();
	}, [activeStudents, setPuzzleData, fetchStudentPuzzleData]);

	const setStudentFetchInfo = (student, key, value) => {
		const info = { ...fetchInfo.get(student) };
		info[key] = value;
		const newFetchInfo = new Map(fetchInfo);
		newFetchInfo.set(student, info);
		setFetchInfo(newFetchInfo);
	};

	const renderStudentPuzzle = (student) => {
		const { puzzleName, ...data } = puzzleData.get(student) || {};
		const render = puzzleComponents[puzzleName];
		return render ? render(data) : null;
	};

	const renderPuzzleSelect = (student) => {
		const directory = props.puzzleDirectory;
		const { puzzleName, puzzleId } = fetchInfo.get(student);
		const ids = puzzleName ? directory[puzzleName] : [];
		return (
			<div className="puzzle-select">
				<select
					name="type-select"
					id="type-select"
					value={puzzleName}
					onChange={(e) =>
						setStudentFetchInfo(
							student,
							"puzzleName",
							e.target.value
						)
					}
				>
					{Object.keys(directory).map((type) => (
						<option value={type}>{type}</option>
					))}
				</select>
				<select
					name="instance-select"
					id="instance-select"
					value={puzzleId}
					onChange={(e) =>
						setStudentFetchInfo(student, "puzzleId", e.target.value)
					}
				>
					{ids.map((id) => (
						<option value={id}>{id}</option>
					))}
				</select>
			</div>
		);
	};

	const renderStudentDisplay = (student) => {
		const { first, last } = student;
		const puzzleInfo = fetchInfo.get(student);
		const activepuzzle = puzzleInfo ? puzzleInfo.activepuzzle : null;
		return (
			<li key={`${first}_${last}`}>
				<div className="student-header">
					<span className="student-name">
						{capitalize(first)} {capitalize(last)}
					</span>
					<input
						type="checkbox"
						name="active"
						id={`${first}_${last}-active`}
						checked={activepuzzle ? true : false}
						onChange={() =>
							setStudentFetchInfo(
								student,
								"activepuzzle",
								!activepuzzle
							)
						}
					/>
					{!activepuzzle ? renderPuzzleSelect(student) : null}
				</div>
				{renderStudentPuzzle(student)}
			</li>
		);
	};

	return (
		<ul className="puzzle-display">
			{activeStudents.map(renderStudentDisplay)}
		</ul>
	);
}

function capitalize(string) {
	return string.replace(/^./, (char) => char.toUpperCase());
}
