import React, {Component} from 'react';
import FeedbackButtons from './FeedBackOptions/feedBackOptions';
import Notification from './Notification/Notification'
import Statistics from './Statistics/statistics';


export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isActive: false,
    options : [
      "Good",
      "Neutral",
      "Bad"]
  };

 
countTotalFeedback ()  {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total
  };

countPositiveFeedbackPercentage  () {
    const total = this.state.good + this.state.neutral + this.state.bad;
    if (total === 0) {
      return
    }
    const percentage = Math.round((this.state.good * 100) / total); 
    return percentage;
  };

  changeState = (event) => {
    const defBtn = event.currentTarget.textContent;

    if (defBtn === 'Good') {
            this.setState(prevState => {
              return {
                good: prevState.good + 1,
                isActive: true,
              };
            });
          } else if (defBtn === 'Neutral') {
            this.setState(prevState => {
              return {
                neutral: prevState.neutral + 1,
                isActive: true,
              };
            });
          } else {
            this.setState(prevState => {
              return {
                bad: prevState.bad + 1,
                isActive: true,
              };
            });
          }
}

  render() {
    
    return (
      <div>
         
       <Statistics 
       good={this.state.good} 
       neutral={this.state.neutral} 
       bad={this.state.bad} 
       total={this.countTotalFeedback()} 
       positivePercentage={this.countPositiveFeedbackPercentage()}
       isActive={this.state.isActive}
       />

       <Notification isActive={this.state.isActive} message="There is no feedback"
        />   
          
          <FeedbackButtons onleavefeedback = {this.changeState}
          options={this.state.options}/>
          
        </div>

      
    );
  }
}

