import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import Calcudoku from "./templates/calcudoku";
import Logic from "./templates/logic";
import Light from "./templates/light";
import Matchstick from "./templates/matchstick";
import Tangram from "./templates/tangram";

const puzzleComponents = {
	calcudoku: (data) => <Calcudoku data={data} />,
	logic: (data) => <Logic data={data} />,
	light: (data) => <Light data={data} />,
	matchstick: (data) => <Matchstick data={data} />,
	tangram: (data) => <Tangram data={data} />,
};

function ViewWindow({ children }) {
	const containerRef = useRef(document.createElement("div"));

	useEffect(() => {
		const viewWindow = window.open("");
		viewWindow.document.body.appendChild(containerRef.current);
		copyStyles(document, viewWindow.document);
		return () => viewWindow.close();
	}, []);

	return createPortal(children, containerRef.current);
}

export default function ClassroomView({
	showStudentNames,
	puzzleData,
	students,
}) {
	const renderStudentPuzzle = (student) => {
		const { puzzleName, ...data } = puzzleData.get(student) || {};
		const render = puzzleComponents[puzzleName];
		return render ? (
			<div className="student-puzzle">{render(data)}</div>
		) : null;
	};

	return (
		<ViewWindow>
			<ul className="classroom-view">
				{students.map((student) => {
					const { first, last } = student;
					return (
						<li key={`${first}_${last}`}>
							{showStudentNames ? (
								<div className="student-name">
									{capitalize(first)} {capitalize(last)}
								</div>
							) : null}
							{renderStudentPuzzle(student)}
						</li>
					);
				})}
			</ul>
		</ViewWindow>
	);
}

function capitalize(string) {
	return string.replace(/^./, (char) => char.toUpperCase());
}

function copyStyles(sourceDoc, targetDoc) {
	Array.from(sourceDoc.styleSheets).forEach((styleSheet) => {
		try {
			if (styleSheet.cssRules) {
				const newStyleEl = sourceDoc.createElement("style");

				Array.from(styleSheet.cssRules).forEach((cssRule) => {
					newStyleEl.appendChild(
						sourceDoc.createTextNode(cssRule.cssText)
					);
				});

				targetDoc.head.appendChild(newStyleEl);
			} else {
				const newLinkEl = sourceDoc.createElement("link");

				newLinkEl.rel = "stylesheet";
				newLinkEl.href = styleSheet.href;
				targetDoc.head.appendChild(newLinkEl);
			}
		} catch (e) {
			// console.log(e);
		}
	});
}
