import React from "react";

export default function Logic({ data: { description, work } }) {
	return (
		<div>
			<p className="puzzle-description">{description}</p>
			<textarea className="work" disabled>
				{work}
			</textarea>
		</div>
	);
}
