import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2020');

    const handleYearSelect = (year) => {
        setYearFilter(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onYearSelect={handleYearSelect} selectedYear={yearFilter}/>
            {props.items.map((item) => {
                return (
                    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                )
            })}
        </Card>
    );
}

export default Expenses;