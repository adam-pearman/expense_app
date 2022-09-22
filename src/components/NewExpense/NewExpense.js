import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        handleHideExpenseForm();
    }

    const handleShowExpenseForm = () => {
        setShowExpenseForm(true);
    }

    const handleHideExpenseForm = () => {
        setShowExpenseForm(false);
    }

    return (
      <div className="new-expense">
          {!showExpenseForm && <button onClick={handleShowExpenseForm}>Add New Expense</button>}
          {showExpenseForm && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onHideExpenseForm={handleHideExpenseForm}/>}
      </div>
    );
}

export default NewExpense;