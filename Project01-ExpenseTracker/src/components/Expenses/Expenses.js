import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return filteredYear === expense.date.getFullYear().toString();
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
