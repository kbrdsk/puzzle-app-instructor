import React, { useEffect, useState, useCallback, useMemo } from "react";

import Calcudoku from "./templates/calcudoku";
import Logic from "./templates/logic";
import Light from "./templates/light";

const puzzleComponents = {
	calcudoku: (data) => <Calcudoku data={data} />,
	logic: (data) => <Logic data={data} />,
	light: (data) => <Light data={data} />,
};

const fetchDefaults = {
	activepuzzle: true,
	puzzleName: "calcudoku",
	puzzleId: "4x4beginner1",
};

export default function PuzzleDisplay(props) {
	const [puzzleData, setPuzzleData] = useState(new Map());
	const [fetchInfo, setFetchInfo] = useState(new Map());
	const [studentHistory, setStudentHistory] = useState(new Map());
	const [completedLists, setCompletedLists] = useState(new Map());
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

	const fetchStudentCompletedList = useCallback(
		async (student) => {
			const { first, last } = student;
			const { puzzleName } = fetchInfo.get(student);
			const url =
				process.env.REACT_APP_API_URL +
				`/students/${first}_${last}/${puzzleName}/completed`;
			const response = await fetch(url, {
				headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
			});
			return await response.json();
		},
		[fetchInfo]
	);

	const setCompleted = useCallback(
		async (student, completed) => {
			const { first, last } = student;
			const { puzzleName, puzzleId } = puzzleData.get(student);
			const url =
				process.env.REACT_APP_API_URL +
				`/students/${first}_${last}/${puzzleName}/${puzzleId}/completed`;
			fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: process.env.REACT_APP_INSTRUCTOR_PW,
				},
				body: JSON.stringify({ completed }),
			});
		},
		[puzzleData]
	);

	const updateHistory = useCallback(
		async (student) => {
			const { first, last } = student;
			const url =
				process.env.REACT_APP_API_URL +
				`/students/${first}_${last}/activepuzzle`;
			const response = await fetch(url, {
				headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
			});
			const {
				puzzleName,
				puzzleId,
				...puzzleData
			} = await response.json();
			if (!puzzleName) return;
			setStudentHistory((oldHistory) => {
				const studentHistory = oldHistory.get(student) || {};
				const puzzleHistory = studentHistory[puzzleName] || {};
				const instanceHistory = puzzleHistory[puzzleId] || [];
				const isNewData =
					!instanceHistory[0] ||
					JSON.stringify({ puzzleId, ...puzzleData }) !==
						JSON.stringify(instanceHistory[0].data);
				if (isNewData) {
					puzzleHistory[puzzleId] = [
						{
							data: { puzzleId, ...puzzleData },
							timestamp: Date.now(),
						},
						...instanceHistory,
					];
					studentHistory[puzzleName] = puzzleHistory;
					const newHistory = new Map(oldHistory);
					newHistory.set(student, studentHistory);
					return newHistory;
				} else {
					return oldHistory;
				}
			});
		},
		[setStudentHistory]
	);

	const refresh = useCallback(async () => {
		const [dataUpdates, completionUpdates] = await Promise.all([
			Promise.all(
				activeStudents.map(async (student) => {
					updateHistory(student);
					const data = await fetchStudentPuzzleData(student);
					return [student, data];
				})
			),
			Promise.all(
				activeStudents.map(async (student) => {
					const list = await fetchStudentCompletedList(student);
					return [student, list];
				})
			),
		]);
		setPuzzleData((oldPuzzleData) => {
			const newPuzzleData = new Map(oldPuzzleData);
			dataUpdates.forEach((data) => newPuzzleData.set(...data));
			return newPuzzleData;
		});

		setCompletedLists((oldCompletedLists) => {
			const newCompletedLists = new Map(oldCompletedLists);
			completionUpdates.forEach((data) => newCompletedLists.set(...data));
			return newCompletedLists;
		});
		console.log("refreshed");
	}, [
		activeStudents,
		setPuzzleData,
		fetchStudentPuzzleData,
		updateHistory,
		setCompletedLists,
		fetchStudentCompletedList,
	]);

	//refresh puzzle data
	useEffect(() => {
		refresh();
		const refreshInterval = setInterval(refresh, 1000);
		return () => clearInterval(refreshInterval);
	}, [refresh]);

	const setStudentFetchInfo = (student, key, value) => {
		const info = { ...fetchInfo.get(student) };
		info[key] = value;
		if (key === "puzzleName") {
			info.puzzleId = props.puzzleDirectory[value][0];
		}
		const newFetchInfo = new Map(fetchInfo);
		newFetchInfo.set(student, info);
		setFetchInfo(newFetchInfo);
	};

	const renderStudentPuzzle = (student) => {
		const { puzzleName, completed, ...data } =
			puzzleData.get(student) || {};
		const render = puzzleComponents[puzzleName];
		return render ? (
			<div>
				<div>
					Completed:{" "}
					<span
						className={`completed-check ${
							completed ? "complete" : "incomplete"
						}`}
						onClick={() => setCompleted(student, !completed)}
					>
						{completed ? "\u2713" : "\u25EF"}
					</span>
				</div>
				{render(data)}
			</div>
		) : null;
	};

	const renderHistory = (student) => {
		const history = studentHistory.get(student);
		if (!history) return null;
		const { first, last } = student;
		const sortedHistory = Object.keys(history)
			.flatMap((key) =>
				Object.keys(history[key]).map((instanceKey) => {
					const {
						data: { puzzleId },
						timestamp,
					} = history[key][instanceKey][0];
					return { puzzleName: key, puzzleId, timestamp };
				})
			)
			.sort(({ timestamp: a }, { timestamp: b }) => (a > b ? -1 : 1));
		return (
			<select
				name="history-select"
				className="history-select"
				id={`history-${first}-${last}`}
				onChange={(e) => {
					const { puzzleName, puzzleId } = JSON.parse(e.target.value);
					setStudentFetchInfo(student, "puzzleName", puzzleName);
					setStudentFetchInfo(student, "puzzleId", puzzleId);
				}}
			>
				{sortedHistory.map(({ puzzleName, puzzleId, timestamp }) => {
					const time = new Date(timestamp).toLocaleTimeString();
					return (
						<option
							value={JSON.stringify({ puzzleName, puzzleId })}
						>
							{puzzleId} {time}
						</option>
					);
				})}
			</select>
		);
	};

	const renderPuzzleSelect = (student) => {
		const directory = props.puzzleDirectory;
		const { puzzleName } = fetchInfo.get(student);
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
				<ul>
					{ids.map((id) => {
						const completed = completedLists.get(student)[id];
						return (
							<li
								onClick={() =>
									setStudentFetchInfo(student, "puzzleId", id)
								}
							>
								{id}
								<span
									className={`completed-check ${
										completed ? "complete" : "incomplete"
									}`}
									onClick={() =>
										setCompleted(student, !completed)
									}
								>
									{completed ? "\u2713" : "\u25EF"}
								</span>
							</li>
						);
					})}
				</ul>
				{renderHistory(student)}
			</div>
		);
	};

	const hasRecentActivity = (student) => {
		const history = studentHistory.get(student) || {};
		return Object.keys(history).some((key) =>
			Object.keys(history[key]).some((instanceKey) => {
				const { timestamp } = history[key][instanceKey][0];
				return Date.now() - timestamp < 60000;
			})
		);
	};

	const renderStudentDisplay = (student) => {
		const { first, last } = student;
		const puzzleInfo = fetchInfo.get(student);
		const activepuzzle = puzzleInfo ? puzzleInfo.activepuzzle : null;
		return (
			<li key={`${first}_${last}`}>
				<div className="student-header">
					<div className="student-name">
						<span className="name">
							{capitalize(first)} {capitalize(last)}
						</span>
						<span className="activity-indicator">
							{hasRecentActivity(student) ? null : "Inactive"}
						</span>
					</div>
					<div>
						Show Active Puzzle:
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
					</div>
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
