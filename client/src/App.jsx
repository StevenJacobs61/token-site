import './App.css'
import Navbar from './components/layout/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Main from './components/layout/main/main'
import Dashboard from './pages/dashboard/dashboard'

function App() {

  return (
    <>
    <Navbar/>
    <Main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Main>
    </>
  )
}

export default App
