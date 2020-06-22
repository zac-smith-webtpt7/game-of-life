import React, { useState } from 'react'
import GameControls from '../GameControls/GameControls'
import styles from './GameBoard.module.css'
import produce from 'immer'

const GameBoard = () => {
  const boxSize = 12
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
          gridTemplateColumns: `repeat(${gridSize}, ${boxSize}px)`,
        }}
      >
        {gameGrid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}+${k}`}
              onClick={() => {
                const newGrid = produce(gameGrid, (gridCopy) => {
                  gridCopy[i][k] = gameGrid[i][k] ? 0 : 1
                })
                setGameGrid(newGrid)
              }}
              style={{
                width: boxSize,
                height: boxSize,
                background: gameGrid[i][k] ? 'blue' : 'black',
                border: '1px solid #222222',
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
