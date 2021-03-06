import React, { useState } from "react";

export default function Light({ data }) {
	const { work } = data;
	const [workPosition, setWorkPosition] = useState(data.workPosition || 0);
	const {
		size: { cols, rows },
		beginstate,
		neighborType,
	} = data;

	const neighborList = ({ row, col }) => {
		switch (neighborType) {
			case "x":
				return [
					{ row: row - 1, col: col - 1 },
					{ row: row + 1, col: col + 1 },
					{ row: row + 1, col: col - 1 },
					{ row: row - 1, col: col + 1 },
					{ row, col },
				];
			default:
				return [
					{ row: row - 1, col },
					{ row: row + 1, col },
					{ row, col: col - 1 },
					{ row, col: col + 1 },
					{ row, col },
				];
		}
	};

	const renderSquare = (row, ...[, col]) => {
		const neighbors = neighborList({ row, col });
		const activatedNeighbors = work
			.slice(0, workPosition)
			.filter((square) => neighbors.some(squareMatcher(square)));
		const isactive =
			(activatedNeighbors.length +
				(beginstate.some(squareMatcher({ row, col })) ? 1 : 0)) %
				2 >
			0;
		const classList = `light-square ${isactive ? "active" : "inactive"}`;
		return <div className={classList} />;
	};

	const renderRow = (...[, index]) => {
		return (
			<div className="grid-row">
				{Array(cols).fill(null).map(renderSquare.bind(null, index))}
			</div>
		);
	};

	const jumpTo = (position) => setWorkPosition(position);

	return (
		<div className="light-puzzle-container">
			<div className="light-grid" cols={cols} rows={rows}>
				{new Array(rows).fill(null).map(renderRow)}
			</div>
			<div className="controller">
				<JumpBack jump={() => jumpTo(0)} isactive={workPosition > 0} />
				<StepBack
					step={() => jumpTo(Math.max(workPosition - 1, 0))}
					isactive={workPosition > 0}
				/>
				<StepForward
					step={() => jumpTo(Math.min(workPosition + 1, work.length))}
					isactive={workPosition < work.length}
				/>
				<JumpForward
					jump={() => jumpTo(work.length)}
					isactive={workPosition < work.length}
				/>
			</div>
		</div>
	);
}

function squareMatcher({ row, col }) {
	return (square) => square.col === col && square.row === row;
}

function StepBack({ step, isactive }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2048"
			height="2048"
			viewBox="0 0 2048 2048"
			onClick={step}
			className="step back nav-button"
			isactive={isactive.toString()}
		>
			<path
				d="M1344 576v896q0 26-19 45t-45
				19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19
				19 45z"
			/>
		</svg>
	);
}

function JumpBack({ jump, isactive }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2048"
			height="2048"
			viewBox="0 0 2048 2048"
			onClick={jump}
			className="jump back nav-button"
			isactive={isactive.toString()}
		>
			<path
				d="M1811 269q19-19 32-13t13 32v1472q0 
			26-13 32t-32-13l-710-710q-8-9-13-19v710q0 
			26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 
			32-13t13 32v710q5-11 13-19z"
			/>
		</svg>
	);
}

function StepForward({ step, isactive }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2048"
			height="2048"
			viewBox="0 0 2048 2048"
			onClick={step}
			className="step forward nav-button"
			isactive={isactive.toString()}
		>
			<path
				d="M1280 1024q0 26-19 45l-448 448q-19 19-45 
				19t-45-19-19-45v-896q0-26 19-45t45-19 45 
				19l448 448q19 19 19 45z"
			/>
		</svg>
	);
}

function JumpForward({ jump, isactive }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2048"
			height="2048"
			viewBox="0 0 2048 2048"
			onClick={jump}
			className="jump forward nav-button"
			isactive={isactive.toString()}
		>
			<path
				d="M237 1779q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 
				710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 
				45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z"
			/>
		</svg>
	);
}
