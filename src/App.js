import React from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </>
  )
}

export default App
