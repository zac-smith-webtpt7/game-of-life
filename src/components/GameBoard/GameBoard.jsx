import React, { useState, useCallback, useRef } from 'react'
import GameControls from '../GameControls/GameControls'
import styles from './GameBoard.module.css'
import produce from 'immer'

const GameBoard = () => {
  const boxSize = 18
  const [gridSize, setGridSize] = useState(30)
  const [gameTime, setGameTime] = useState(1000)
  const [start, setStart] = useState(false)
  const neigbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ]

  let startReference = useRef(start)
  startReference.current = start
  const emptyGrid = () => {
    const rows = []
    for (let i = 0; i < gridSize; i++) {
      rows.push(Array.from(Array(gridSize), () => 0))
    }

    return rows
  }
  const randomGrid = () => {
    const rows = []
    for (let i = 0; i < gridSize; i++) {
      rows.push(
        Array.from(Array(gridSize), () => (Math.random() > 0.75 ? 1 : 0))
      )
    }

    return rows
  }

  const [gameGrid, setGameGrid] = useState(() => {
    return emptyGrid()
  })

  const startGame = useCallback(() => {
    if (!startReference.current) {
      return
    }

    // game logic
    setGameGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let nGrid = 0
            neigbors.forEach(([x, y]) => {
              const IX = i + x
              const JY = j + y
              if (IX >= 0 && IX < gridSize && JY >= 0 && JY < gridSize) {
                nGrid += g[IX][JY]
              }
            })

            if (nGrid < 2 || nGrid > 3) {
              gridCopy[i][j] = 0
            }
            if (g[i][j] === 0 && nGrid === 3) {
              gridCopy[i][j] = 1
            }
          }
        }
      })
    })

    setTimeout(startGame, gameTime)
  }, [])

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
          rows.map((col, j) => (
            <div
              key={`${i}+${j}`}
              onClick={() => {
                const newGrid = produce(gameGrid, (gridCopy) => {
                  gridCopy[i][j] = gameGrid[i][j] ? 0 : 1
                })
                setGameGrid(newGrid)
              }}
              style={{
                width: boxSize,
                height: boxSize,
                background: gameGrid[i][j] ? 'blue' : 'black',
                border: '1px solid #222222',
              }}
            />
          ))
        )}
      </div>
      <div>
        <section className={styles.section}>
          <button
            className={styles.btn}
            onClick={() => {
              setStart(!start)
              if (!start) {
                startReference.current = true
                startGame()
              } else {
                startReference.current = false
              }
            }}
          >
            {start ? 'Pause' : 'Start'}
          </button>

          <button
            onClick={() => {
              setGameGrid(emptyGrid())
              setGameTime(1000)
            }}
            className={styles.btn}
          >
            Reset
          </button>
          <button
            onClick={() => {
              setGameGrid(randomGrid())
            }}
            className={styles.btn}
          >
            Random
          </button>
          <button
            onClick={() => {
              setGameTime(100)
            }}
            className={styles.btn}
          >
            Time 100ms
          </button>
          <button
            onClick={() => {
              setGameTime(500)
            }}
            className={styles.btn}
          >
            Time 500ms
          </button>
          <button
            onClick={() => {
              setGameTime(1000)
            }}
            className={styles.btn}
          >
            Time 1000ms
          </button>
          <div className={styles.details}>
            <h3>Game Details</h3>
            <p>Interval: {gameTime}</p>
            <p>Grid Size: {`${gridSize}x${gridSize}`}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
export default GameBoard
