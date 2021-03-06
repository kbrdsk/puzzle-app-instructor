import React, { useState } from "react";

export default function StudentList(props) {
	const { students } = props;
	const [displayedStudents, setDisplayedStudents] = useState(students);
	const filter = (event) => {
		const query = event.target.value.split(" ");
		const filteredStudents = students.filter(({ first, last }) =>
			query.every((pattern) => {
				const regexp = new RegExp(pattern, "i");
				return first.match(regexp) || last.match(regexp);
			})
		);
		setDisplayedStudents(filteredStudents);
	};
	return (
		<div className="student-list-container">
			<RefreshButton
				{...props}
				setDisplayedStudents={setDisplayedStudents}
			/>
			<input type="text" placeholder="Filter" onChange={filter} />
			<ul className="student-list">
				{displayedStudents.map(renderStudent.bind(null, props))}
			</ul>
		</div>
	);
}

function RefreshButton({ students, setStudents, setDisplayedStudents }) {
	const fetchStudentList = async () => {
		const listurl = `${process.env.REACT_APP_API_URL}/students`;
		const response = await fetch(listurl, {
			headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
		});
		if (response.ok) {
			try {
				let list = (await response.json()).map((student) => {
					const studentMatch = students.find(
						({ first, last }) =>
							first === student.first && last === student.last
					);
					return studentMatch || student;
				});
				setStudents(list);
				setDisplayedStudents(list);
			} catch (error) {
				console.log(error);
			}
		} else console.log("HTTP error, status = " + response.status);
	};
	return (
		<button className="refresh-students" onClick={fetchStudentList}>
			Refresh
		</button>
	);
}

function renderStudent({ students, setStudents }, student) {
	const { first, last, active } = student;
	return (
		<li key={`${first} ${last}`}>
			{capitalize(first)} {capitalize(last)}{" "}
			<input
				type="checkbox"
				name="active"
				id={`${first}_${last}-active`}
				defaultChecked={active ? true : false}
				onChange={() => {
					student.active = !active;
					setStudents([...students]);
				}}
			/>
		</li>
	);
}

function capitalize(string) {
	return string.replace(/^./, (char) => char.toUpperCase());
}
