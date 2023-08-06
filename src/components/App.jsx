import { useState, setState } from 'react';

import React, {Component} from 'react';
import { nanoid } from 'nanoid'



const App =()=> {

  const [good, setGoodState] = useState(0);
  const [neutral, setNeutraldState] = useState(0);
  const [bad, setBadState] = useState(0);
  // const [isActive, setisActive] = useState(false);


//
//     options : [
//       "Good",
//       "Neutral",
//       "Bad"]


 
const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + neutral;
    if (total === 0) {
      return
    }
    const percentage = Math.round((good * 100) / total); 
    return percentage;
  };


const  changeState = (event) => {
  const  = event.currentTarget.textContent;

  setGoodState(prevState => prevState+1)
    if (defBtn === 'Good') {
      setGoodState(prevState => prevState+1)
              }; 
    if (defBtn === 'Neutral') {
      setNeutraldState(prevState => prevState+1);
          }  
    if (defBtn === 'Bad') {
            setBadState(prevState => prevState+1);
          }
  
  }

 const  changeState = (event) => {
    const {name} = event.currentTarget.textContent;
  
    switch (name) {
      case 'Good':
        setGoodState(prevState => prevState+1)
        break;

        case 'Neutral':
        setGoodState(prevState => prevState+1)
        break;
    
      default:
        break;
    }
    
    }


//   render() {
    
    return (

      <div>
        <ul >
      Statistics
      <li >Good {good}</li>
      <li >Neural {neutral}</li>
      <li >Bad {bad}</li>
      <li >Total {countTotalFeedback()}</li>
      <li >Positive feedback {countPositiveFeedbackPercentage}%</li>
    </ul>
         <div>
         <button  type="button"  onClick={changeState} key={nanoid()}>
        <samp>Good</samp></button>
         <button  type="button"  onClick={changeState} key={nanoid()}>
        <samp>Neutral</samp></button>
        <button type="button"  onClick={changeState} key={nanoid()}>
        <samp>Bad</samp></button>
      </div>

        </div>

      
    );

}

export default App


{/* <Statistics  */}
//        good={this.state.good} 
//        neutral={this.state.neutral} 
//        bad={this.state.bad} 
//        total={this.countTotalFeedback()} 
//        positivePercentage={this.countPositiveFeedbackPercentage()}
//        isActive={this.state.isActive}
//        />

//        <Notification isActive={this.state.isActive} message="There is no feedback"
//         />   
          
//           <FeedbackButtons onleavefeedback = {this.changeState}
//           options={this.state.options}/>