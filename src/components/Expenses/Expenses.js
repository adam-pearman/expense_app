import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2020');

    const handleYearSelect = (year) => {
        setYearFilter(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    });



    return (
        <Card className="expenses">
            <ExpensesFilter onYearSelect={handleYearSelect} selectedYear={yearFilter}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;