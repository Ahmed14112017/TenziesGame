import React from "react"
export default function Die(props){
const style={
    backgroundColor:props.held?"#59E391":"#fff"
}
  return(
    <div className="die-face"
     style={style}
     onClick={props.holdDice}
     >
     <h2 className="die-num">{props.value}</h2>
    </div>
  )
}