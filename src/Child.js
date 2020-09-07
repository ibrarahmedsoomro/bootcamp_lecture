import React, { useContext } from 'react';
import { TransactionContext } from './transContext';

function Child() {

  let transactions = useContext(TransactionContext);
  //let [newDesc, setDesc] = useState("");
  //let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();

   }


  return (

    <div className="container">
      <h1   className="container-text">Expense Tracer</h1>

      <h3>Your Balance <br />$260</h3>
      <div className="expense-container">
        <h3>Income <br />$500</h3>
        <h3>Expense <br />$250</h3>
      </div>
      <h3>History</h3>
      <hr />

      <ul className="trnsaction-list">
        {transactions.map((transObj, ind) => {
          return (<li key={ind}>
            <span>{transObj.desc}</span>
            <span>{transObj.amount}</span>

          </li>
          )

        })}

      </ul>

      <h3>Add transactions</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input type="text" required />
          <br />
        </label>

        <label>
          Enter Amount <br />
          <input type="number"  required />
          <br />
        </label>

        <label>
          <input type="submit" value="Add Transaction" />
        </label>
      </form>
    </div>
  );
}

export default Child;