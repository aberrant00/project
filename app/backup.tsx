export default function Home() {
  return (
    <div className="panel">
      <div className="leftside">
        <div className="tablebody">
          <table>
            <td className="category">
              <div className="icontext">
                <img className="icon" src="food.png" />
                Food & Drink
              </div>
            </td>
            <td className="description">McDonald's</td>
            <td className="date">10/03/2023</td>
            <td className="ammount">-150,00 $</td>
            <td className="balance">3.1456,66 $</td>
            <div className="teditdlt">
              <td className="tedit">
                <img className="icon" src="edit.png" />
              </td>
              <td className="tdelete">
                <img className="icon" src="delete.png" />
              </td>
            </div>
          </table>
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
