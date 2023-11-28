export default function Home() {
  return (
    <div className="panel">
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
              <p className="subtotal">1.322,10 $</p>
            </div>
            <div className="expense">
              <p className="balance">Expense</p>
              <p className="subtotal">1.110,25 $</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="plus">
            <img className="imgplus" src="plus.png" />
            <p className="balance">Income</p>
          </div>
          <div className="minus">
            <img className="imgminus" src="minus.png" />
            <p className="balance">Expense</p>
          </div>
        </div>
      </div>
    </div>
  );
}
