import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className={"expenses-list__fallback"}>Found no expenses.</h2>
    }

    return (
        <ul className={"expenses-list"}>
            {props.items.map(expense => (
                <div key={expense.id}>
                    <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                </div>
            ))}
        </ul>
    );
}

export default ExpensesList