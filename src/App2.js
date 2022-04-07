import React,{useState} from "react";
import './App.css';
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
 
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
 
 
 
// const Dummy_expenses = [
//   { id: 'e1', title: 'Car Insurance', amount: 234.34, date: new Date(2022, 7, 14), },
//   { id: 'e2', title: 'Item', amount: 434.34, date: new Date(2022, 2, 28)},
//   { id: 'e3', title: 'Car ', amount: 834.34, date: new Date(2022, 5, 2), },
//   { id: 'e4', title: 'Insurance', amount: 734.34, date: new Date(2022, 5, 12), },
// ];
const App=() => {
  // const [expenses,setExpenses] = useState(Dummy_expenses);
  // part 2
  const [courseGoals,setCourseGoals] = useState([
    {text:'Do all exercises!', id: 'g1'},
    {text:'Finsih course!', id: 'g2'}
  ]);


  // const addExpenseHandler =expense=>{
  //   setExpenses((prevExpenses) =>{
  //     return [expense,...prevExpenses];
  //   });
  // };
// part 2
  const addGoalHandler=(enteredText)=>{
    setCourseGoals(prevGoals =>{
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText,id:Math.random().toString() });
      // return [enteredText,...prevGoals];
      return updatedGoals;
    });
  };

  const deleteItemHandler=(goalId)=>{
    setCourseGoals((prevGoals)=>{
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  };

  let content =(
    <p style={{textAlign: 'center'}}>No goals found</p>
  );

  if (courseGoals.length > 0){
    content=(
      <CourseGoalList  items={courseGoals} onDeleteItem={deleteItemHandler}/>
    )
  }

  return (
    <div>
      {/* <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} /> */}
      <section id="goal-form">
      <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section id="goals">
        {content}
        {/* <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/> */}
      </section>


    </div>
  
  );
}

export default App;
