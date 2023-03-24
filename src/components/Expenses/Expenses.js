import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <Card className="expenses">
`            {props.data.map(expense => (
                    <div key={expense.id}>
                    <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                    </div>
                )
            )};
        </Card>
        </div>
    );
}

export default Expenses