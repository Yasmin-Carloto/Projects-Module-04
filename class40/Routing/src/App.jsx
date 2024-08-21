import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MainContent from './components/MainContent'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const changeElementState = () => {
    setIsLoggedIn(true)
    console.log(isLoggedIn);
  }

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<MainContent />} />
          <Route 
            path="/contact" 
            element={
              <Contact
                isLoggedIn={isLoggedIn}
              >
                <div className="flex flex-col justify-center text-center items-center">
                    <h3 className="text-2xl m-4">Login não está feito</h3>
                    <button
                        className="bg-orange-700 p-2 m-4 text-white rounded-md hover:bg-orange-500"
                        onClick={() => setIsLoggedIn(true)}
                    >
                        Fazer login!
                    </button>
                </div>
              </Contact>
            } />
        </Routes>
      </Router>
    </>
  )
}

export default App
