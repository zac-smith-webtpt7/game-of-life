import React from 'react'
import styles from './GameControls.module.css'

const GameControls = ({ setGrid }) => {
  const handle25 = () => {
    setGrid({ nRows: 25, nCols: 25 })
    console.log(setGrid)
  }
  const handle50 = () => {
    setGrid({ nRows: 50, nCols: 50 })
  }
  return (
    <section className={styles.section}>
      <button className={styles.btn} onClick={handle25}>
        25x25 Manual
      </button>
      <button className={styles.btn}>25x25 Random</button>
      <button className={styles.btn} onClick={handle50}>
        50x50 Manual
      </button>
      <button className={styles.btn}>50x50 Random</button>
      <button className={styles.btn}>Start</button>
      <button className={styles.btn}>Pause</button>
      <button className={styles.btn}>Reset</button>
    </section>
  )
}

export default GameControls
