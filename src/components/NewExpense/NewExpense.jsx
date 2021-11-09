import React,{useState} from 'react'

function NewExpense() {
    const [state, setstate] = useState()
    function onchangehandler(event){
        setstate(event.target.value)

    }
    return (
        <div className="New-Expense">
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" onChange={onchangehandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01"  onChange={onchangehandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-01-01"  onChange={onchangehandler}/>
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
            
        </div>
    )
}

export default NewExpense;
