import React, { useState } from 'react'
import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate'
import Card from './Card'

export const ExpenseItem = (props) => {
    const [title, setTitle] = useState("changed");

    const clickHandler = () => {
        setTitle("updated")

    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

//export default ExpenseItem