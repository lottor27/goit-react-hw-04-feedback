import React from "react";
import css from "./notification.module.css"


function Notification({isActive, message}){
    if(!isActive){
        return( <h2 className={css.textNotifc}>{message}</h2>)
    } 
    return
}

export default Notification