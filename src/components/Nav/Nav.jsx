import React from 'react'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Game of Life</h1>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
          >
            Learn More
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
