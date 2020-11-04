import React from "react";

export default function StudentList(props) {
	return (
		<div>
			<SearchBar {...props} />
			<RefreshButton {...props} />
			{props.students.map(renderStudent.bind(null, props))}
		</div>
	);
}

function SearchBar() {
	return <div className="search-students">Search Bar</div>;
}

function RefreshButton({ students, setStudents }) {
	const fetchStudentList = async () => {
		const listurl = `${process.env.REACT_APP_API_URL}/students`;
		const response = await fetch(listurl, {
			headers: { authorization: process.env.REACT_APP_INSTRUCTOR_PW },
		});
		if (response.ok) {
			try {
				const list = await response.json();
				list.forEach((student) => {
					const studentMatch = students.find(
						({ first, last }) =>
							first === student.first && last === student.last
					);
					student.active = studentMatch ? studentMatch.active : false;
				});
				setStudents(list);
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
			{first} {last}{" "}
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
