import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"srish",
    age:20
  };
  let newarr=[1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chai or code" someobj={myobj} somearr={newarr} btntext="click me"/>
      <Card username={"srish"} />
    </>
  )
}

export default App
