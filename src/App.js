import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "키친타올 구매",
    amount: 9000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV 수리", amount: 20000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "자동차 보험료",
    amount: 1000000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "데스커 책상 구매",
    amount: 170000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
