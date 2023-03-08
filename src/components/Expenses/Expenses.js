import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
        {props.items.map((expense) => <ExpenseItem product={expense.product} price={expense.price} date={expense.date} />)}

      </Card>
    </div>
  );
};
export default Expenses;
