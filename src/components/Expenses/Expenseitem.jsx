import React,{useState} from 'react'
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';


function Expenseitem(props) {
    const [title, setTitle] = useState(props.title);
    function clickHandler(){
        setTitle('Updated');

    };
  
    
    
    
    return (
        <>
        
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
                <button onClick={clickHandler}>CLick here</button>
            </Card>
            
        </>
    );
}

export default Expenseitem;