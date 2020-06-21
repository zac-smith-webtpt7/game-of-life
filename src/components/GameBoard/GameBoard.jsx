import React, { useState } from 'react'
import styles from './GameBoard.module.css'

const nRows = 50
const nCols = 50

const GameBoard = () => {
  const [gameGrid, setGameGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < nRows; i++) {
      rows.push(Array.from(Array(nCols), () => 0))
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
          gridTemplateColumns: `repeat(${nCols}, 10px)`,
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
    </div>
  )
}
export default GameBoard
