import React, {useState} from "react";

import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const initialExpenses = [
  {
    id: "e1",
    product: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    product: "New TV",
    price: 499.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    product: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    product: "New Desk (wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
