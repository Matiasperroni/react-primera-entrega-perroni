
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const greeting = "Bienvenidos a AENO e-commerce."

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  )
}

export default App
