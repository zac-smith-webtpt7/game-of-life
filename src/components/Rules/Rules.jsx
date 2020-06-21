import React from 'react'
import styles from './Rules.module.css'
const Rules = () => {
  return (
    <div className={styles.rules_container}>
      <h2>Rules</h2>
      <p className={styles.p}>
        The universe of the Game of Life is an infinite, two-dimensional
        orthogonal grid of square cells, each of which is in one of two possible
        states, live or dead, (or populated and unpopulated, respectively).
        Every cell interacts with its eight neighbours, which are the cells that
        are horizontally, vertically, or diagonally adjacent. At each step in
        time, the following transitions occur:
      </p>
      <ol className={styles.ol}>
        <li className={styles.li}>
          Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </li>
        <li className={styles.li}>
          Any live cell with two or three live neighbours lives on to the next
          generation.
        </li>
        <li className={styles.li}>
          Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </li>
        <li className={styles.li}>
          Any dead cell with exactly three live neighbours becomes a live cell,
          as if by reproduction.
        </li>
      </ol>
      <p className={styles.p}>
        These rules, which compare the behavior of the automaton to real life,
        can be condensed into the following:
      </p>
      <ol className={styles.ol}>
        <li className={styles.li}>
          Any live cell with two or three live neighbours survives.
        </li>
        <li className={styles.li}>
          Any dead cell with three live neighbours becomes a live cell.
        </li>
        <li className={styles.li}>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ol>
    </div>
  )
}
export default Rules
