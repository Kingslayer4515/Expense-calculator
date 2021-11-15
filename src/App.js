import react from 'react';
import Expenseitem from './components/Expenses/Expenseitem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Groceries',
      amount: 114.12,
      date: new Date(2020, 8, 21),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 200,
      date: new Date(2020, 5, 14),
    },
    {
      id: 'e4',
      title: 'Laptop',
      amount: 800,
      date: new Date(2020, 6, 5),
    },
    

  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
      
        

        <Expenses expenses={expenses} />
      
    </>

  );
}

export default App;