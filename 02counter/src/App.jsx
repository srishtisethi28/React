import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =useState(5)
//let counter=5
const addValue=()=>{
  if(counter<20)
  setCounter(counter+1)
}

const removeVal=()=>{
  if(counter>0)
  setCounter(counter-1)
}
  return (
    <>
      <h1>Chai or react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeVal}>Remove Value {counter}</button>
      <p>footer</p>
    </>
  )
}

export default App
