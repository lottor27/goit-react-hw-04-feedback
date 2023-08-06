import React from "react"
import css from "./statistics.module.css"
import PropTypes from "prop-types";

function Statistics ({good, neutral, bad, total, positivePercentage, isActive }) {

  if(!isActive){
    return
  }
  return(
 
    <ul className={css.textlist}>
      Statistics
      <li className={css.textlist}>Good {good}</li>
      <li className={css.textlist}>Neural {neutral}</li>
      <li className={css.textlist}>Bad {bad}</li>
      <li className={css.textlist}>Total {total}</li>
      <li className={css.textlist}>Positive feedback {positivePercentage}%</li>
    </ul>)
  
  

}

export default Statistics


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
    isActive: PropTypes.bool,
    
  };