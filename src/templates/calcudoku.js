import React from "react";

export default function Calcudoku({ data }) {
	const { size } = data;
	const grid = generateGrid(data);
	return (
		<div>
			<div className="puzzle-container" size={size}>
				<div className="grid-container" size={size}>
					{grid.map(renderSquare)}
				</div>
			</div>
		</div>
	);
}

function renderSquare(square) {
	const classList = "calcudoku-square " + square.neighbors.join(" ");
	return (
		<div className={classList}>
			<div className="cage-indicator">
				{square.result}
				{square.operation}
			</div>
			<input type="number" value={square.value || ""} disabled />
		</div>
	);
}

function generateGrid(puzzleData) {
	const { size, cages, work } = puzzleData;
	const squares = Array(size ** 2).fill(null);
	return squares.map((...[, index]) => {
		const col = Math.floor(index / size);
		const row = index % size;
		const matchSquare = squareMatcher({ col, row });
		const entry = work.find(matchSquare);
		const cage = cages.find((cage) => cage.squares.find(matchSquare));
		const neighbors = neighborList({ col, row }, cage);
		const isTopLeft = cage.squares.every(
			(square) => square.col >= col && square.row >= row
		);
		const result = isTopLeft ? cage.result : null;
		const operation = isTopLeft ? cage.operation : null;
		const value = entry ? entry.value : null;
		return { col, row, value, neighbors, result, operation };
	});
}

function neighborList(square, cage) {
	const neighbors = [];
	const directions = {
		"n-up": { col: square.col - 1, row: square.row },
		"n-down": { col: square.col + 1, row: square.row },
		"n-left": { col: square.col, row: square.row - 1 },
		"n-right": { col: square.col, row: square.row + 1 },
	};

	for (let dir in directions) {
		const matchSquare = squareMatcher(directions[dir]);
		if (cage.squares.find(matchSquare)) {
			neighbors.push(dir);
		}
	}

	return neighbors;
}

function squareMatcher({ col, row }) {
	return (square) => square.col === col && square.row === row;
}
