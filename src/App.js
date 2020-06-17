import React from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="container">
      <h3>Conway Game of Life</h3>
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
