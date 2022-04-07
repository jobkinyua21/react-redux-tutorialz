import React from 'react'
import Button2 from './Button/Button2'
import Card from './Card'
import classes from './Error.module.css'
function ErrorModal(props) {
  return (
    <div>
    <div className={classes.backdrop}  onClick={props.onClose} />
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button2 onClick={props.onClose}>Okay</Button2>
      </footer>
    </Card>
  </div>
  )
}

export default ErrorModal