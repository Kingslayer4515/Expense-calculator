import React,{useState} from 'react'

function NewExpense() {
    const [enteredtitle, setEnteredtitle] = useState('');
    const [enteredamount, setEnteredamount] = useState('');
    const [entereddate, setEntereddate] = useState('');
    function onchangehandler(event){
        setEnteredtitle(event.target.value);

    };
    function amountchangehandler(event){
        setEnteredamount(event.target.value);

    };
    function datechangehandler(event){
        setEntereddate(event.target.value);

    };
    function submitHandler(event){
        event.preventDefault();

        const expensedata={
            title: enteredtitle,
            amount: enteredamount,
            date: entereddate


        };
        console.log(expensedata);
        setEnteredtitle("");
        setEnteredamount("");
        setEntereddate("");
    };
    
    
    return (
        <div className="New-Expense">
            <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" onChange={onchangehandler} value={enteredtitle}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  onChange={amountchangehandler} value={enteredamount}/>
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-01-01"  onChange={datechangehandler} value={entereddate}/>
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
            </form>
            
        </div>
    )
}

export default NewExpense;
