import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredEzpenseData)=>{
        const expenseData = {
            ...enteredEzpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData)
         //Important
        //this is the way to send data up from child component to parent component
        //the trick is to pass a function as prop in parent component which is App.js component in this case. 
        //This function expects to receive some values from child component which we are sending in next step by calling the function
        //we cannot transfer from child to child component. We need to pass it to parent and then parent can pass it to other child.
        props.onAddExpense(expenseData)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense