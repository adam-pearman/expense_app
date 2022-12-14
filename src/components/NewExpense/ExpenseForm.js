import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const expenseData = {title, amount: +amount, date: new Date(date)}
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={handleTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={handleAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={handleDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onHideExpenseForm}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ExpenseForm;