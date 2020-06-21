import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Dashboard />
      </div>
    </>
  )
}

export default App
