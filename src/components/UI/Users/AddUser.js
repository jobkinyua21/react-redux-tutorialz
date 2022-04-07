import React,{useState} from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal';
import classes from './AddUser.module.css'
 

function AddUser(props) {

    const [enteredUserName,setEnteredUsername] = useState('')
    const [enteredAge,setEnteredAge] = useState('')
    const [error,setError] = useState('')

    const addUserHandler = (event)=>{
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name'
            })
            return;
        }
        if (enteredAge<1){
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age'
            })
            return;
        }
        props.onAddUser(enteredUserName,enteredAge)
        // console.log(enteredUserName,enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    };
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    };
    const closeModalHandler=()=>{
        setError(null)
    }


  return (
      <div>
    {error && <ErrorModal title={error.title}  message={error.message} onClose={closeModalHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input value={enteredUserName} id="username" type="text" onChange={usernameChangeHandler}/>
    <label htmlFor="age">Age (Years)</label>
    <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
    <Button type="submit">Add User</Button>
  </form>
  </Card>
  </div>
  )
}

export default AddUser