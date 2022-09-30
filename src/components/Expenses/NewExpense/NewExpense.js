import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [buttonShown, setbuttonShown] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //data from expense data from expenseform
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setbuttonShown(false);
  };
  const startEditingHandler = () => {
    setbuttonShown(true);
  };

  const stopEditingHandler = () => {
    setbuttonShown(false);
  };
  return (
    <div className="new-expense">
      {!buttonShown && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {buttonShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
{
  /* //1.to pass the expense data(from form) to a new expense, we can do this by adding a new prop to expense form-prop should be a f(saveexpenseDataHandler) that eventually be triggered when smth happens inside of that component/when the user submits the entered expense data
//2.inside of the expense form we expect to get some props(props.onSaveExpenseData) and inside of the submit handler, I ll set the props.onSaveExpenseData() and execute it here nad add expenseData
//3. In App js we add a function addExpenseHandler with paramter (expense) and add onAddExpense with pointer to addExpenseHnalder and then inside of new expense we can call it, we accept the props arg as well and in the save expense data handler which itself is called wgen smth happens in the expense form-we can also call props.onAddExpense and we forward the enriched data (expenseData)
export default NewExpense; */
}
export default NewExpense;
