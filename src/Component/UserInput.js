import React from 'react';
import classes from './Put.css'

const UserInput = (props) => {
  

    const style = {
      border: '2px solid black',
      backgroundColor: '#061d4b',
      color: 'white'
    }
    const small = {
      width: '50px',
      backgroundColor: '#061d4b',
      border: '2px solid black'
    }
    return (
      <div className='style'>
        
        <form>
        Exercise:  &nbsp; 
          <input 
            type="text" 
            value={props.exercise}
            placeholder='exercise'
            style={style}
            name='exercise'
            onChange={props.handleChange}
            
          >
          </input>
          &nbsp; &nbsp;
          Reps:
            <input 
              type="number"  
              value={props.reps}
              placeholder='reps'
              style={small}
              name='reps'
            >
          </input>
          
          <br />
        </form>
      </div>
    
  )
};

export default UserInput;