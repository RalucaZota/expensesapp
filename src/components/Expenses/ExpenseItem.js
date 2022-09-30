import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //title-is a pointer at the managed value, the initial value(props.title)
  // 2nd element in the array is the updating f-which can later call to set a new title
  //-for updating the value we call the setTitle(or whatever name) inside the event handler f and inside of it we write the updated value of the element.

  //we simply pass this as an arg to useState

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}></button>
      </Card>
    </li>
  );
}
// the content bet the opening and closing card tag, that is what will be available on props children inside of that card
export default ExpenseItem;
