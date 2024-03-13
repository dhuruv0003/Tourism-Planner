import { useState } from 'react'
import './App.css'
import Tours from './components/Tours'
import data from './data.jsx'

function App() {

  const [toursval, setData] = useState(data)

  return (
    <div className=''>

      <Tours tours={toursval}></Tours>

    </div>
  )
}

export default App
