import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section>
      <h3>John Conway's Game of Life</h3>
      <p className={styles.top}>
        Motivated by the mathematical logic of creation, as purposed by John von
        Neumann in the 1940s, John Conway began to experiment with
        two-dimensional cellular automation.
      </p>
      <p className={styles.pTag}>
        John von Neumann defined life as a creation that can reproduce itself
        and simulate a Turing machine. John von Neumann's ideas on the matter
        stated turned out to be unrealistic witht he technology of the time, and
        this lead Stanislaw Ulam to invent cellular automata. Cellular automata
        was meant to simulate the methods proposed by von Neumann, and was a
        construct of a two-dimensional grid. Although Ulam discussed using
        computers to simulate his cellular automata, it was following
        generations that took and modified his thoeries. In 1968 John Conway
        started his research.
      </p>
      <p className={styles.pTag}>
        Originally John Conway's goal with cellular automata was to define an
        'interesting' and 'unpredictable' cell automation. John Conway wanted
        some intial states to last a long time before dying while preventing
        overcrowding, and others that will dye nearly immediately or last
        seemingly forever. The Game of Life is his definition that meets John
        von Nuemann's two general requirements. Altough John Conway's definition
        is proof-oriented, he aimed for it to be simple with having to valide or
        prove the automation was alive. He rules or definition are provide
        above, and is the basis for this game.
      </p>
    </section>
  )
}

export default About
