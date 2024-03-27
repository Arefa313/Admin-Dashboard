import { useState } from 'react'
import './App.css'
import Sidbar from './Sidbar'
import Home from './Home'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid-container'>
      <Header />
      <Sidbar />
      <Home />
    </div>
  )
}

export default App
