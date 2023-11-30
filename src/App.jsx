import { useState } from 'react'
import './assets/css/app.css'
import CounterPage from './assets/pages/CounterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterPage/>
    </>
  )
}

export default App
