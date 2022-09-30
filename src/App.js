import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHnadler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHnadler} />
      <Expenses items={expenses} />
    </div>
  );
}
//APP COMPONENT which has access to the rxpense form and new expense but also to the Expenses component; since the expenses com is the com where we need the data in the end/it is the app component where we wanna lift the state up to

//CHILD TO PARENT COMPONENT COM:the goal is to add new expenses at the expenses obj above
//we need to pass the data which we generate in the expense form to the app component
export default App;
