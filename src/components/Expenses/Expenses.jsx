import React,{useState}from 'react'
import Expenseitem from '../Expenses/Expenseitem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterHandler =selectedYear =>{
        setFilteredYear(selectedYear);
    };
const filteredExpenses=props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
});  
let expensescontent=<p>No expenses Found</p>;
if(filteredExpenses.length>0){
    expensescontent=filteredExpenses.map((expense) => (
                
        <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        
    ))

}  
    return (
        <Card className="expenses">
            <div>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseFilter onchangefilter={filterHandler} selected={filteredYear}/>
            {expensescontent}
            

            
            
            </div>
            

        </Card>
    );
};

export default Expenses;
