"use client";
import Image from "next/image";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="panel">
      <div className="leftside">
        <div className="tablebody">
          <div className="table">
            <div className="tcategory">
              <div className="icontext">
                <Image
                  alt=""
                  height="14"
                  width="14"
                  className="icon"
                  src="/food.png"
                />
                Food & Drink
              </div>
            </div>
            <div className="tdescription">McDonalds</div>
            <div className="tdate">10/03/2023</div>
            <div className="tammount">-150,00 $</div>
            <div className="ttbalance">3.1456,66 $</div>

            <div className="tteditdlt">
              <div className="tedit">
                <Image
                  alt=""
                  height="14"
                  width="14"
                  className="icon"
                  src="/edit.png"
                />
              </div>
              <div className="tdelete">
                <Image
                  alt=""
                  height="14"
                  width="14"
                  className="icon"
                  src="/delete.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tablehead">
          <p className="category">Category</p>
          <p className="description">Description</p>
          <p className="date">Date</p>
          <p className="ammount">Ammount</p>
          <p className="tbalance">Balance</p>
          <div className="editdel">
            <p className="edit">Edit</p>
            <p className="delete">Delete</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="numbers">
          <div className="balance">
            <p className="balance">Balance</p>
            <p className="march">March 16</p>
            <div className="total">
              <p className="total">1.684,33 </p>
              <p className="dollar">$</p>{" "}
            </div>
          </div>
          <div className="position">
            <div className="income">
              <p className="balance">Income</p>
              <div className="incsubtotal">
                {" "}
                <p className="subtotal">1.322,10</p>
                <p className="subtotalm">$</p>
              </div>
            </div>
            <div className="expense">
              <p className="balance">Expenses</p>
              <div className="expsubtotal">
                {" "}
                <p className="subtotal">1.110,25</p>
                <p className="subtotalm">$</p>
              </div>
            </div>
          </div>
        </div>
        <div id="modal-root" className="buttons">
          {showModal && (
            <Modal title="" onClose={() => setShowModal(false)}></Modal>
          )}
          <div onClick={() => setShowModal(true)} className="plus">
            <Image
              alt=""
              height="15"
              width="15"
              className="imgplus"
              src="/plus.png"
            />
            <p className="balance">Income</p>
          </div>
          <div onClick={() => setShowModal(true)} className="minus">
            <Image
              alt=""
              height="15"
              width="15"
              className="imgminus"
              src="/minus.png"
            />
            <p className="balance">Expense</p>
          </div>
        </div>
      </div>
    </div>
  );
}
