import { useState } from 'react'
import TicTacToe from './components/TicTacToe/TicTacToe'
import './App.css'

function App() {
  const [count, setCount] = useState()

  return (
    <div id='app'>
      <TicTacToe/>
    </div>
  )
}

export default App
