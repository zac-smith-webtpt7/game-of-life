import React, { useState } from 'react'
import GameControls from '../GameControls/GameControls'
import styles from './GameBoard.module.css'

const GameBoard = () => {
  // const [nRows, setNRows] = useState(50)
  // const [nCols, setNCols] = useState(50)

  const [grid, setGrid] = useState(50) // console.log('rows', grid.nRows)
  // console.log(('cols', grid.nCols))

  const [gameGrid, setGameGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < grid; i++) {
      rows.push(Array.from(Array(grid), () => 0))
    }

    return rows
  })
  // console.log('rows', rows)
  return (
    <div className={styles.game_board}>
      <div
        className={styles.game}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${grid}, 10px)`,
        }}
      >
        {gameGrid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}+${k}`}
              style={{
                width: 10,
                height: 10,
                background: gameGrid[i][k] ? 'pink' : undefined,
                border: '1px solid black',
              }}
            />
          ))
        )}
      </div>
      <div>
        <section className={styles.section}>
          <button className={styles.btn}>50x50 Manual</button>
          <button className={styles.btn}>50x50 Random</button>
          <button className={styles.btn}>Start</button>
          <button className={styles.btn}>Pause</button>
          <button className={styles.btn}>Reset</button>
        </section>
      </div>
    </div>
  )
}
export default GameBoard
