import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, title }) => {
	const handleCloseClick = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = (
		<div className="modal-overlay">
			<div className="modal-wrapper">
				<div className="modal">
					<div><a href="#" onClick={handleCloseClick}>
						x
					</a></div>

					<div className="category">hello</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(
		modalContent,
		document.getElementById("modal-root")
	);
};

export default Modal
