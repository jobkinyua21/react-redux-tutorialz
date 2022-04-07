import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styled from 'styled-components';

const FormControl=styled.div`

    margin:0.5rem 0;

& label{
    font-weight:bold;
    display:block;
    margin-bottom: 0.5rem;
}

& input{
    display:block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 2.5rem;
    padding:0 0.25rem;
    border-radius: 10px;
}

& input:focus{
    outline: none;
    background:#fad0ec;
    border-color: #8b005d;
}

&.invalid label{
    color: red;
}
&.invalid input{
    background-color: salmon;
    border-color: red;
}
`;

function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
     
    const goalInputChangeHandler =(event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value)
    };

    const formSubmitHandler =(event) => {
        event.preventDefault();
        if (enteredValue.trim().length ===0){
            setIsValid(false)
        return;
        };
        props.onAddGoal(enteredValue)
        // console.log(enteredValue);
        setEnteredValue('');

    }

  return (
     <form onSubmit={formSubmitHandler}>
         {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
         <FormControl className={!isValid && 'invalid'}>
             <label
            //   style={{color: !isValid?'red' : 'black'}}
              >
                  Course Goal
              </label>
             <input
            //   style={{
            //      borderColor: !isValid?'red' : 'black',
            //      backgroundColor: !isValid?'salmon' : 'transparent'
            //  }}
             type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
         </FormControl>
         <Button type="submit">Add Goal</Button>
     </form>
  )
}

export default CourseInput