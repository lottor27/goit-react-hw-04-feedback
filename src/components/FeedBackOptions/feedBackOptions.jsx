import React from "react"
import css from "./feedBackOptions.module.css"
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

  const FeedbackButtons = ({onleavefeedback, options}) => {
    return(
    <div>
      {options.map(option =>(
        <button className={css.btn2} type="button"  onClick={onleavefeedback} key={nanoid()}>
        <samp>{option}</samp>
      </button>
      ))}
      </div>
      )}
      

  export default FeedbackButtons

  FeedbackButtons.propTypes = {
    onleavefeedback: PropTypes.func,
    options: PropTypes.array,
    
    
  };