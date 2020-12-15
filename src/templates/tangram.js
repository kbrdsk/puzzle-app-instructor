import React, { useRef, useEffect } from "react";

export default function Tangram({
	data: {
		height,
		width,
		selectionProximity,
		unitLength,
		objective,
		startingCenter,
		objectiveCenter,
		work,
	},
}) {
	const canvasRef = useRef(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		draw({
			ctx,
			height,
			width,
			shapes: createTangrams({ unitLength, startingCenter, work }),
			objective,
			objectiveCenter,
			unitLength,
		});
	}, [
		height,
		width,
		work,
		objective,
		objectiveCenter,
		unitLength,
		startingCenter,
	]);

	return (
		<div className="tangram display-container">
			<canvas
				id="tangram-canvas"
				ref={canvasRef}
				height={height}
				width={width}
			/>
		</div>
	);
}

function createTangrams({ unitLength, startingCenter, work }) {
	const positions = {
		...startingConfiguration({ unitLength, startingCenter }),
		...work,
	};
	return [
		createTriangle({
			...positions.largeTriangle1,
			color: "#7d99ed",
			size: unitLength * 2,
			name: "largeTriangle1",
		}),
		createTriangle({
			...positions.largeTriangle2,
			color: "#70c2df",
			size: unitLength * 2,
			name: "largeTriangle2",
		}),
		createTriangle({
			...positions.mediumTriangle,
			color: "#9edfe5",
			size: unitLength * Math.sqrt(2),
			name: "mediumTriangle",
		}),
		createSquare({
			...positions.square,
			color: "#c3ebef",
			size: unitLength,
		}),
		createParallelogram({
			...positions.parallelogram,
			color: "#3f2fa5",
			size: unitLength,
		}),
		createTriangle({
			...positions.smallTriangle1,
			color: "#6146d9",
			size: unitLength,
			name: "smallTriangle1",
		}),
		createTriangle({
			...positions.smallTriangle2,
			color: "#7e6cfb",
			size: unitLength,
			name: "smallTriangle2",
		}),
	];
}

function createVertex({ shape, relAngle, distanceFromCenter }) {
	const vertex = { relAngle };
	Object.defineProperty(vertex, "x", {
		get() {
			return (
				shape.center.x +
				Math.cos(shape.angle + relAngle) * distanceFromCenter
			);
		},
	});
	Object.defineProperty(vertex, "y", {
		get() {
			return (
				shape.center.y +
				Math.sin(shape.angle + relAngle) * distanceFromCenter
			);
		},
	});
	return vertex;
}

function createTriangle({ size, center, angle, color, name }) {
	const distanceToClosePoint =
		(size * Math.sin(Math.PI / 8)) / Math.sin((5 * Math.PI) / 8);
	const distanceToFarPoint =
		(size * Math.sin(Math.PI / 4)) / Math.sin((5 * Math.PI) / 8);
	const triangle = { center, color, angle, name };
	triangle.vertices = [
		{ relAngle: 0, distanceFromCenter: distanceToClosePoint },
		{
			relAngle: (5 * Math.PI) / 8,
			distanceFromCenter: distanceToFarPoint,
		},
		{
			relAngle: -(5 * Math.PI) / 8,
			distanceFromCenter: distanceToFarPoint,
		},
	].map((vertex) => createVertex({ ...vertex, shape: triangle }));
	return triangle;
}

function createSquare({ size, center, angle, color }) {
	const distanceFromCenter = (size * Math.sqrt(2)) / 2;
	const square = { center, color, angle, name: "square" };
	square.vertices = Array.from({ length: 4 }, (_, i) =>
		createVertex({
			shape: square,
			distanceFromCenter,
			relAngle: (i * Math.PI) / 2,
		})
	);
	return square;
}

function createParallelogram({ size, center, angle, color }) {
	const distanceToClosePoint = size / 2;
	const distanceToFarPoint = size / Math.sin(Math.atan2(2, 1));
	const parallelogram = { center, color, angle, name: "parallelogram" };
	parallelogram.vertices = [
		{ relAngle: 0, distanceFromCenter: distanceToClosePoint },
		{
			relAngle: -Math.atan2(2, 1),
			distanceFromCenter: distanceToFarPoint,
		},
		{
			relAngle: Math.PI,
			distanceFromCenter: distanceToClosePoint,
		},
		{
			relAngle: -(Math.PI + Math.atan2(2, 1)),
			distanceFromCenter: distanceToFarPoint,
		},
	].map((vertex) => createVertex({ ...vertex, shape: parallelogram }));

	return parallelogram;
}

function startingConfiguration({ startingCenter, unitLength }) {
	return {
		largeTriangle1: {
			center: {
				x: startingCenter.x,
				y:
					startingCenter.y +
					(unitLength * 2 * Math.sin(Math.PI / 8)) /
						Math.sin((5 * Math.PI) / 8),
			},
			angle: -Math.PI / 2,
		},
		largeTriangle2: {
			center: {
				x:
					startingCenter.x -
					(unitLength * 2 * Math.sin(Math.PI / 8)) /
						Math.sin((5 * Math.PI) / 8),
				y: startingCenter.y,
			},
			angle: 0,
		},
		mediumTriangle: {
			center: {
				x:
					startingCenter.x +
					unitLength *
						(Math.sqrt(2) -
							Math.sin(Math.PI / 8) /
								Math.sin((Math.PI * 5) / 8)),
				y:
					startingCenter.y -
					unitLength *
						(Math.sqrt(2) -
							Math.sin(Math.PI / 8) /
								Math.sin((Math.PI * 5) / 8)),
			},
			angle: -Math.PI / 4,
		},
		square: {
			center: {
				x: startingCenter.x,
				y: startingCenter.y - (unitLength * Math.sqrt(2)) / 2,
			},
			angle: 0,
		},
		parallelogram: {
			center: {
				x: startingCenter.x + unitLength * ((Math.sqrt(2) * 3) / 4),
				y: startingCenter.y + unitLength * (Math.sqrt(2) / 4),
			},
			angle: -Math.PI / 4,
		},
		smallTriangle1: {
			center: {
				x: startingCenter.x - (unitLength * Math.sqrt(2)) / 2,
				y:
					startingCenter.y -
					unitLength *
						(Math.sqrt(2) / 2 +
							Math.sin(Math.PI / 8) /
								Math.sin((Math.PI * 5) / 8)),
			},
			angle: Math.PI / 2,
		},
		smallTriangle2: {
			center: {
				x:
					startingCenter.x +
					unitLength *
						(Math.sin(Math.PI / 8) / Math.sin((Math.PI * 5) / 8)),
				y: startingCenter.y,
			},
			angle: Math.PI,
		},
	};
}

function draw({
	ctx,
	width,
	height,
	objective,
	shapes,
	vertexSelection,
	shapeSelection,
	objectiveCenter,
	unitLength,
}) {
	ctx.clearRect(0, 0, width, height);
	objective.forEach(
		drawObjective.bind(null, ctx, objectiveCenter, unitLength)
	);
	shapes.forEach(drawShape.bind(null, ctx));
	if (vertexSelection) {
		ctx.beginPath();
		ctx.arc(vertexSelection.x, vertexSelection.y, 6, 0, 2 * Math.PI);
		ctx.fillStyle = "#c1b4fa";
		ctx.shadowBlur = 4;
		ctx.shadowColor = ctx.fillStyle;
		ctx.fill();
		ctx.shadowBlur = 0;
		ctx.shadowColor = "#0b032d";
	} else {
		if (shapeSelection) {
			drawShape(ctx, {
				...shapeSelection,
				color: "#c1b4fa",
			});
		}
	}
}

function drawShape(
	ctx,
	{ vertices: [firstVertex, ...vertices], color, center }
) {
	ctx.beginPath();
	ctx.moveTo(firstVertex.x, firstVertex.y);
	vertices.forEach((point) => ctx.lineTo(point.x, point.y));
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

function drawObjective(ctx, objectiveCenter, unitLength, objective) {
	const adjustedObjective = objective.map(([x, y]) => [
		objectiveCenter.x + unitLength * x,
		objectiveCenter.y + unitLength * y,
	]);
	ctx.beginPath();
	const [objectiveStart, ...objectivePoints] = adjustedObjective;
	ctx.moveTo(...objectiveStart);
	objectivePoints.forEach((point) => ctx.lineTo(...point));
	ctx.closePath();
	ctx.fillStyle = "#0b032d";
	ctx.fill();
}
