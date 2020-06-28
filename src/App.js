import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import About from './components/About/About.jsx'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Dashboard />
        <About />
      </div>
    </>
  )
}

export default App
