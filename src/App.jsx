import Navbar from './components/Navbar';
import Details from './components/Details';
import TravelData from './data/TravelData';
import './App.css'

function App() {

  const travels = TravelData.map(travel=>
      <Details 
      key = {travel.id}
      travel = {travel}
      />
    )

  return (
    <div className="App">
      <Navbar/>
      <section>
        {travels}
      </section>
    </div>
  )
}

export default App
