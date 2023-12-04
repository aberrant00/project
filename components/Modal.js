import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
	const handleCloseClick = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = (
		<div className="modal-overlay">
			<div className="modal-wrapper">
				<div className="modal">
					<a href="#" onClick={handleCloseClick}>
						x
					</a>
					{title && <h1>{title}</h1>}
					<div className="modal-body">{children}</div>
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
