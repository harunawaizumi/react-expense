import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Car',
        amount: 190,
        date: new Date(2021, 1, 2)
    },
    {
        id: 'e2',
        title: 'Pen',
        amount: 20,
        date: new Date(2020, 1, 5)
    },
    {
        id: 'e3',
        title: 'Note',
        amount: 11,
        date: new Date(2021, 10, 15)
    }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }
  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
