import React, { useState, useRef } from 'react';
import './Put.css'
import Button from './Button';
//import UserInput from './UserInput'

function UserOutput (props) {

  const style = {
    border: '2px solid black',
    backgroundColor: '#4665a3'
  }
  const small = {
    width: '50px',
    backgroundColor: '#4665a3',
    border: '2px solid black'
  }

  const textarea = {
      border: '1px solid black',
      width: '70%',
      margin: '0 auto',
      outline: 'none',
      height: '100px',
      background: '#4665a3',
      padding: '10px',
  
  }
  
  //const [inputData, setInputData] = useState({exercise: '', reps: ''})
  
  //const [formInput, setFormInput] = useState([])
  const [newFormInput, setNewFormInput] = useState({exercise: "", reps: ""})
  const [formData, setFormData] = useState([])
  const inputRef = useRef(null)

  //console.log(inputData)
  

  function handleChange(event) {
    const {name, value} = event.target
    setNewFormInput(prevInput => ({...prevInput, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFormData(preInput => [...preInput, newFormInput])
    setNewFormInput(prevInputData => ({...prevInputData, exercise: '', reps: ''}))
    inputRef.current.focus()
  }

  // function submitExercise(event) {
  //   event.preventDefault()
  //   setFormInput(preInput => [...preInput, newFormInput])
  
  // }

  let key= 0

  const inputDisplay = formData.map(data => <p key={key++}>{data.exercise} {data.reps}</p>)

  //const addExercise = formData.map(input => <p key={key++}>{input}</p>)
  

    return (

    <>
    <form onSubmit={handleSubmit}>
        <Button btnLabel='Add exercise'onClick={handleSubmit}/>
          <div className='Put'>
            <h2>{props.day}</h2>
              {inputDisplay}
            
              <h4>
                Exercise:  &nbsp;
                  <input 
                    type="text" 
                    value={newFormInput.exercise}
                    placeholder='exercise'
                    style={style}
                    name='exercise'
                    onChange={handleChange}
                    ref={inputRef}
                  >
                  </input>
                  <> &nbsp;</>
                  Reps: &nbsp;
                  <input 
                    type="number" 
                    value={newFormInput.reps}
                    placeholder='reps'
                    style={small}
                    name='reps'
                    onChange={handleChange}
                  
                  >
                </input>
                
                <br />
                </h4>
                  <textarea style={textarea}/>
                </div>
          </form>
            
    </>
    )
};

export default UserOutput;

  // <h4>Exercise: {inputData.exercise}  &nbsp; &nbsp;  Reps: {inputData.reps}</h4>
  //  <input 
  //           type="text" 
  //           value={inputData.exercise}
  //           placeholder='exercise'
  //           style={style}
  //           name='exercise'
  //           onChange={handleChange}
  //         >
  //         </input>
  //         <> &nbsp;</>
  //         <input 
  //           type="number" 
  //           value={inputData.reps}
  //           placeholder='reps'
  //           style={small}
  //           name='reps'
  //           onChange={handleChange}
  //         >
  //       </input>
  //       <UserInput btnLabel='Submit'/>
      
