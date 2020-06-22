import React, { useState } from 'react'
import GameControls from '../GameControls/GameControls'
import styles from './GameBoard.module.css'
import produce from 'immer'

const GameBoard = () => {
  const [gridSize, setGridSize] = useState(50)

  const [gameGrid, setGameGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < gridSize; i++) {
      rows.push(Array.from(Array(gridSize), () => 0))
    }

    return rows
  })

  return (
    <div className={styles.game_board}>
      <div
        className={styles.game}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 10px)`,
        }}
      >
        {gameGrid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}+${k}`}
              onClick={() => {
                const newGrid = produce(gameGrid, (gridCopy) => {
                  gridCopy[i][k] = 1
                })
                setGameGrid(newGrid)
              }}
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
