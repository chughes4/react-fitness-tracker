import React, { Component } from 'react';
import './App.css';
//import UserInput from './Component/UserInput';
import UserOutput from './Component/UserOutput';


class App extends Component {
  state = {
    cards: [
      { id: '1', exercise: '', day: 'Day 1', reps: ''},
      { id: '2', exercise: '', day: 'Day 2', reps: ''},
      { id: '3', exercise: '', day: 'Day 3', reps: ''},
      { id: '4', exercise: '', day: 'Day 4', reps: ''},
      { id: '5', exercise: '', day: 'Day 5', reps: ''},
      { id: '6', exercise: '', day: 'Day 6', reps: ''},
      { id: '7', exercise: '', day: 'Day 7', reps: ''}
    ]
    //this.nameChangedHandler = this.nameChangedHandler.bind(this)
  }

  // ChangeHandler = (e, id) => {
  //   const Index = this.state.cards.findIndex(n => {
  //     return n.id === id;
  //   })

  //   const card = {
  //     ...this.state.cards[Index]
  //   };

    
  //    card.name  = e.target.value;
  //     //const {name, value} = event.target
      
  //   const cards = [...this.state.cards];
  //   cards[Index] = card;

  //   this.setState({ cards: cards });
  //   // const {name, value} = event.target
  //   // this.setState({ [name]: value })

  // }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
}


    render() {
        let cards = (
        <div>
          {this.state.cards.map((c, index) => {
            return (
              <>
              
                <UserOutput
                      day = {c.day}
                      exercise= {c.exercise}
                      reps= {c.reps}
                      key={c.id}
                      value={c.value}
                  />
                
              </>
              )
            })}
            
          </div>
        );
        

        return(
          <div className="App">
            <h1 style={{fontSize: '34px', backgroundColor: "white" }} >Workout Routine Tracker</h1>
            {cards}
          </div>
        );
  }
}

export default App;
