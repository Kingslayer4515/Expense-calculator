import React,{useState}from 'react'
import Expenseitem from '../Expenses/Expenseitem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterHandler =selectedYear =>{
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <div>
            <ExpenseFilter onchangefilter={filterHandler} selected={filteredYear}/>
            {props.items.map((expense) => (
                
                <Expenseitem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                )
                )}

            
            
            </div>

        </Card>
    );
};

export default Expenses;
