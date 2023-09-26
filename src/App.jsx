import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
     
      <Outlet />
      <Nav />
    </>
  )
}

export default App
