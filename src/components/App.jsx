import { useState,} from 'react';
import Statistics from './Statistics/statistics';
import React from 'react';
import Notification from './Notification/Notification';
import FeedbackButtons from './FeedBackOptions/feedBackOptions';


const App =()=> {

  const [good, setGoodState] = useState(0);
  const [neutral, setNeutraldState] = useState(0);
  const [bad, setBadState] = useState(0);
  const [isActive, setisActive] = useState(false);


   const options = [
      "Good",
      "Neutral",
      "Bad"]
      
const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    if (total === 0) {
      return
    }
    const percentage = Math.round((good * 100) / total); 
    return percentage;
  };

  
const  changeState = (event) => {
  const defBtn = event.target.textContent;
  console.log(defBtn);

    if (defBtn === 'Good') {
      setGoodState(state => state+1)
      setisActive (true)
            return}

    else if (defBtn === 'Neutral') {
      setNeutraldState(state => state+1)
      setisActive (true)
      return;
      
          } else if (defBtn === 'Bad') {
            setBadState(state => state +1)
            setisActive (true)
            return;
          }
  
  }

    return (

      <div>
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}
       isActive={isActive}
       />

         <FeedbackButtons onleavefeedback = {changeState}
          options={options}/>

      <Notification 
      isActive={isActive} 
      message="There is no feedback"
      />   

        </div>
    );
}

export default App


