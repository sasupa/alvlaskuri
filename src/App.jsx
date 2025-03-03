import React from 'react'
import { useState } from 'react'
import Laskuri from './components/Laskuri'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Laskuri />
  )
}

export default App
