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

  function refreshhandle(){
    setData(data)
  }

  if (tours.length===0){
    return (
      <div className="refresh">
        <h2>No tour plan exist</h2>
        <button onClick={refreshhandle}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='w-[100vw] m-[0px] p-[0px] h-[100vh]'>

      <Tours tours={tours} removetour={removetour}></Tours>

    </div>
  )
}

export default App
