import "./styles.css";
import { useState } from "react";
export default function App() {
  const [showForm, setShowForm] = useState(false);
  function handleOnAdd() {
    setShowForm(!showForm);
  }
  return (
    <div className="App">
      <h3>Expense Tracker</h3>
      <BudgetExpence add={handleOnAdd} show={showForm} />
    </div>
  );
}
function BudgetExpence({ add, show }) {
  return (
    <>
      <div className="balance-div">
        <h6>
          Balance<span>$XXXX</span>
        </h6>
        <Button onClick={add}>Add</Button>
      </div>
      {show && (
        <div className="addtransc">
          <form className="transform">
            <input type="number" />
            <input type="text" />
            <div>
              <label id="">
                <input type="radio" value="expense" checked />
                expense
              </label>
              <label id="">
                <input type="radio" value="Budget" />
                Budget
              </label>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
function Button({ children, onCLick }) {
  return (
    <button className="btn" onCLick={onCLick}>
      {children}
    </button>
  );
}
