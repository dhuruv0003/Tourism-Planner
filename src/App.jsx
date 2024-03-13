import { useState } from 'react'
import './App.css'
import Tours from './components/Tours'
import data from './data.jsx'

function App() {

  const [tours, setData] = useState(data)

  function removetour(id){
    // jis function ki id match nahi karti woh sab tours me add hote rhege, but jiski match ho jayegi woh add nhi hoga 
    const newTours=tours.filter(tour=>tour.id!==id)
    setData(newTours)
  }

  return (
    <div className=''>

      <Tours tours={tours} removetour={removetour}></Tours>

    </div>
  )
}

export default App
