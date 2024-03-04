import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Spinner from './components/Spinner/Spinner'
function App() {


  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Spinner />} />
            <Route  path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
