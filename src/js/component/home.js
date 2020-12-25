import React, { useState } from "react";

export function Home() {
	const [estado, setEstado] = useState("paso11");
	return (
		<div className="fondo">
			<div className="square">
				<div
					className={estado == "paso11" ? "paso11" : "paso1"}
					onClick={() => setEstado("paso11")}
				/>
				<div
					className={estado == "paso22" ? "paso22" : "paso2"}
					onClick={() => setEstado("paso22")}
				/>
				<div
					className={estado == "paso33" ? "paso33" : "paso3"}
					onClick={() => setEstado("paso33")}
				/>
			</div>
			<button
				type="button"
				className="btn btn-primary ml-5"
				onClick={() => {
					if (estado == "paso11") {
						setEstado("paso22");
					} else if (estado == "paso22") {
						setEstado("paso33");
					} else {
						setEstado("paso11");
					}
				}}>
				Cambiar
			</button>
		</div>
	);
}
