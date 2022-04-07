import React,{useState} from 'react';
import Card from '../UI/Card';
  
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear,setFilteredTear] = useState('2022');

    const filterChangeHandler =(selectedYear)=>{
        setFilteredTear(selectedYear);
    };
    // array filtering,does not touch original arrray
    const filterExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    });



  return (
     <Card className="expenses">
         <ExpensesFilter 
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}/>
         {/* {props.items.map((expenses) =>())} */}
         {/* {filterExpenses.length === 0 && <p>No Expenses found</p>} 
         {filterExpenses.length > 0 &&
            filterExpenses.map((expense) =>(
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            )
         )} */}
         <ExpensesChart expenses={filterExpenses}/>
           <ExpensesList items={filterExpenses}/>
     </Card>
  )
}

export default Expenses
 
  