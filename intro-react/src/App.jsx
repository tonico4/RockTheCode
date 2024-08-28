import { useState } from 'react'
import './App.css'
import { ShowCount } from './components/ShowCount/ShowCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowCount num={count} />
      <button className='subs' onClick={() => setCount((count) => count - 1)}>Restar</button>
      <button className='sum' onClick={() => setCount((count) => count + 1)}>Sumar</button>
    </>
  )
}

export default App
