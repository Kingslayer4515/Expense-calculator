import React from 'react'

function ExpenseFilter(props) {
    const filterchangeHandler=(event)=>{
        props.onchangefilter(event.target.value);


    };
    return (
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label> Filter By Year</label>
                <select onChange={filterchangeHandler}>
                    <option  value='2020'>2020</option>
                    <option  value='2021'>2021</option>
                    <option  value='2022'>2022</option>
                    <option  value='2023'>2023</option>
                </select>

            </div>
            
        </div>
    )
}

export default ExpenseFilter;
