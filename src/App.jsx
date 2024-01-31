import React, { useEffect, useState } from "react"
import Die from "./Component/Die"
import {nanoid} from "nanoid"
export default function App(){
const[dice,Setdice]=useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)
useEffect(()=>{
  const allheld=dice.every(die=>die.isHeld)
  const fisrtvalue=dice[0].value
  const allsame=dice.every(die=>die.value===fisrtvalue)
  if(allheld && allsame){
    setTenzies(true)
    console.log("You won!")
  }
},[dice])
    


function generateNewDie() {
  return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
  }
}
  function allNewDice(){

    const dices = []
    for(let i=0;i<10;i++){
      const random=Math.ceil(Math.random()*6)
      dices.push(generateNewDie())
      
  }
  return dices
  
  }
  
  function rollDice(){
    if(!tenzies){
      Setdice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
    }else{
      setTenzies(false)
      Setdice(allNewDice())
    }
    
  }
  const DiceEelement=dice.map((die=>{
    return <Die key={die.id} value={die.value} held={die.isHeld}  holdDice={() => holdDice(die.id)}/>
  }))
  function holdDice(id) {
    Setdice(prevstate=>{
      return prevstate.map((die)=>{
        return die.id===id?{...die,isHeld:!die.isHeld}:die
      })
    })
}
  console.log(allNewDice())
  console.log(DiceEelement)
  return(
    <main>
      
    <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
      {DiceEelement}
      
      </div>
      
      <button className="roll-dice" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}