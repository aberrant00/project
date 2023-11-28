export default function Home() {
  return (
    <div className="panel">
      <div className="leftside">
        <div className="tablebody"></div>
        <div className="tablehead">
          <p className="category">Category</p>
          <p className="description">Description</p>
          <p className="date">Date</p>
          <p className="ammount">Ammount</p>
          <p className="tbalance">Balance</p>
          <p className="edit">Edit</p>
          <p className="delete">Delete</p>
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
                <p className="subtotal">$</p>
              </div>
            </div>
            <div className="expense">
              <p className="balance">Expenses</p>
              <div className="expsubtotal">
                {" "}
                <p className="subtotal">1.110,25</p>
                <p className="subtotal">$</p>
              </div>
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
