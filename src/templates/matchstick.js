import React, { useRef, useEffect, useCallback } from "react";

export default function Matchstick({ data }) {
	const canvasRef = useRef(null);
	const {
		height,
		width,
		work,
		stickWidth,
		description,
		startingConfiguration,
	} = data;

	const draw = useCallback(
		(ctx) => {
			ctx.clearRect(0, 0, width, height);
			ctx.beginPath();
			ctx.lineWidth = stickWidth;
			ctx.lineCap = "round";
			ctx.strokeStyle = "#0b032d22";
			for (let [initial, terminal] of startingConfiguration) {
				ctx.moveTo(initial.x, initial.y);
				ctx.lineTo(terminal.x, terminal.y);
			}
			ctx.stroke();
			for (let [initial, terminal] of work) {
				ctx.beginPath();
				ctx.lineWidth = stickWidth;
				ctx.strokeStyle = "#0b032d";
				ctx.moveTo(initial.x, initial.y);
				ctx.lineTo(terminal.x, terminal.y);
				ctx.stroke();
			}
		},
		[work, height, width, stickWidth, startingConfiguration]
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		draw(context);
	}, [draw]);

	return (
		<div>
			<p>{description}</p>
			<canvas
				id="mathcstick-canvas"
				ref={canvasRef}
				height={height}
				width={width}
				className="matchstick"
			/>
		</div>
	);
}
