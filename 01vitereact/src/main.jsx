import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement= {
//   type:'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit google'
// }

const AnotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotheruser="chai or react"

const ReactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement}
  </StrictMode>
)
