import './App.css';
//import Pokes from './pokes';
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
    <div>
    <Link to="/pokes">Pokes</Link>
    <Link to="/singlePoke">Single poke</Link>

    <Outlet />
    </div>
    
  )
}

export default App