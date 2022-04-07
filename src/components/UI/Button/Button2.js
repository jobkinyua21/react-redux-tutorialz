import React from 'react'
import classes from './Button.module.css';
function Button2(props) {
  return (
     <button classname={classes.button} type={props.type || 'button'} onClick={props.onClick}>
         {props.children}
     </button>
  )
}

export default Button2