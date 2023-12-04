import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Modal = ({ onClose, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="inbuttons">
            <div onClick={handleCloseClick} className="inplus">
              <Image
                alt=""
                height="15"
                width="15"
                className="imgplus"
                src="/plus.png"
              />
            </div>
            <div onClick={handleCloseClick} className="incancel">
              <p className="balance">Cancel</p>
            </div>
          </div>
          <div className="inputs">
            <div className="indescription">
              <p className="indesctext">Description</p>
              <input type="text"></input>
            </div>
            <div className="lower">
              <div className="indescription">
                <p className="indesctext">Ammount</p>
                <input type="text"></input>
              </div>
              <div className="indescription">
                <p className="indesctext">Date</p>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="title">Category</div>
            <div className="catname">Food & Drink</div>
            <div className="iconrow">
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
            </div>
            <div className="iconrow">
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
              <Image
                alt=""
                height="14"
                width="14"
                className="icon"
                src="/food.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root"),
  );
};

export default Modal;
