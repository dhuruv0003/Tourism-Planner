import { useState } from 'react'
import './App.css'
import Tours from './components/Tours'
import data from './data.jsx'

function App() {

  const [data, setData] = useState(data)

  return (
    <div className=''>

      <Tours tours={data}></Tours>

    </div>
  )
}

export default App
