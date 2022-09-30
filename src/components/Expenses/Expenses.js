import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log("Expenses js");
    // console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //An alternative to outputing conditional content

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onForwardData={filterChangeHandler}
        />
        {/* // 67.Outputing conditional content */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* //it this case i wanna make every expense in my expenses array/I want to map every expense into an expense item JSX elem
          //i want to transform this obj(expense) into this pecial kind of obj (jsx elem)(Expense Item)
          //that parameter is used to extract the title, amount, date */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
