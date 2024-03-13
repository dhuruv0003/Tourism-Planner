import { useState } from 'react'
import './App.css'
import Tours from './components/Tours'
import data from './data'

function App() {

  const [data,setData]=useState(data)

  return (
    <div className=''>
      <div className="">
        <h1>Tours Planning by Dhuruv</h1>
        <Tours items={data}></Tours>
      </div>
    </div>
  )
}

export default App
