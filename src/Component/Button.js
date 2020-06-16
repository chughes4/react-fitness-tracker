import React from 'react';
import classes from './Input.module.css'


const Button = (props) => {
  let btnClass = classes.button
  return(
    <button 
     className={btnClass}>
      {props.btnLabel}
      {props.handleSubmit}
    </button>
  )
};

export default Button;

/*
const style = {
    border: '3px solid black'
  }
  const small = {
    width: '50px',
    border: '3px solid black'
  }
  return (
    <div className=''>
      <form>
        <input 
          type="text" onChange={props.changed} 
          value={props.exercise}
          placeholder='exercise'
          style={style}
          name='exercise'
        >
        </input>
          <input 
            type="number" change={props.changed} 
            value={props.reps}
            placeholder='reps'
            style={small}
            name='reps'
          >
        </input>
        
        <br />
      </form>
    </div>

*/
