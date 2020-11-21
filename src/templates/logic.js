import React from "react";

export default function Logic({ data: { description, work } }) {
	return (
		<div className="logic">
			<p className="description">{description}</p>
			<p className="work">{work}</p>
		</div>
	);
}
