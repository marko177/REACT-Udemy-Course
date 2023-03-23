import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function ExpensesList(props) {

    return (
        <Card className="expenses">
            {props.data.map(expense => {

                return (
                    <div key={expense.id}>
                    <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                    </div>
                );
            })}
        </Card>
    );
}

export default ExpensesList