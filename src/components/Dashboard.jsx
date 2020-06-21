import React from 'react'
import GameBoard from './GameBoard'
import Rules from './Rules'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <GameBoard />
      <Rules />
    </div>
  )
}
export default Dashboard
