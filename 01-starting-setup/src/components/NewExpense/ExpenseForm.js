import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");
    
    /**
     * Important
     * To update all states at once we basically use rest operator to copy existing properties and then override any property we would like to change.
     * 
     * Here we try to change amoubt and existing title and date will get copied over
        const  [userInput,setUserInput] = useState({title:'',amount:'',date:''})
     * setUserInput({
     *      ...userInput,
     *      amount : '1.05'
     *    })
     * 
     * //better to do it this way because react puts state updates in a schedules queue. To make sure we always operate on latest state we should
     * use prevSatate
     * setUserinput((prevState)=>{
     *      return {...prevState, amount: '1.05'}
     * })
     * 
     */
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        //Important
        //this is the way to send data up from child component to parent component
        //the trick is to pass a function as prop in parent component which is NewExpense component in this case. 
        //This function expects to receive some values from child component which we are sending in next step by calling the function
        props.onSaveExpenseData(expenseData)
       // console.log(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className = "new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className = "new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className = "new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm;