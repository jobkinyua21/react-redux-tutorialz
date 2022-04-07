import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const  [editing,setEditing] = useState(false);
    // save entered form data to new Expense 
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const startEditingHandler = ()=>{
      setEditing(true);
    };
    
    const stopEditingHandler = ()=>{
      setEditing(false);
    }
  return (
    <div className="new-expense">
      {!editing &&(
      <button onClick={startEditingHandler}>Add new expense</button>)}
        {editing &&(
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={stopEditingHandler}/>)}
        </div>
  )
}

export default NewExpense