import Card from './components/Cards/Card.jsx'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Filmlist from './Filmlist.jsx'

function App() {
  return (
      <>

        <div className='Navbar-Container'>
          <Navbar />
        </div>
        <br />
        <div>
          <Filmlist />
        </div>

      </>
   
  )
}

export default App