import React from 'react'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Game of Life</h1>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>High Score</li>
        <li className={styles.nav_li}>Rules</li>
        <li className={styles.nav_li}>Learn</li>
      </ul>
    </nav>
  )
}
export default Nav
