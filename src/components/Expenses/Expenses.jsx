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
            <Expenseitem title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}></Expenseitem>
            <Expenseitem title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}></Expenseitem>
            <Expenseitem title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}></Expenseitem>
            <Expenseitem title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}></Expenseitem>
                </div>

        </Card>
    )
}

export default Expenses;
