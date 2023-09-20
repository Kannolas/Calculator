import React from "react";
import c from './Button.module.css'

type ButtonProps = {
    text:string,
    callback: (text:string)=>void
}
function Button({text, callback}:ButtonProps){
    return(
        <div className={c.Button} onClick={()=>{callback(text)}}>{text}</div>
    )
}

export default Button