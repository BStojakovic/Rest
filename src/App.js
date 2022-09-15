import './App.css';
//import Pokes from './pokes';
import { Outlet, Link } from "react-router-dom";



function App({ pokemonData }) {
  return (
    <div class= "bg-gradient-to-r from-cyan-200 to-blue-500 ">
      <nav class="p-2 flex justify-center space-x-4">
        <Link to="/pokes">Pokes</Link>
        <Link to="/singlepoke">Single poke</Link>
      </nav>
      <Outlet />
    </div>
    
  )
}

export default App