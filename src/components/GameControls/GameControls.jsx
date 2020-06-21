import React from 'react'
import styles from './GameControls.module.css'

const GameControls = () => {
  return (
    <section className={styles.section}>
      <button className={styles.btn}>25x25 Manual</button>
      <button className={styles.btn}>25x25 Random</button>
      <button className={styles.btn}>50x50 Manual</button>
      <button className={styles.btn}>50x50 Random</button>
      <button className={styles.btn}>Start</button>
      <button className={styles.btn}>Pause</button>
      <button className={styles.btn}>Reset</button>
    </section>
  )
}

export default GameControls
