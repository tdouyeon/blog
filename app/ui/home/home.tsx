'use client'
import React from 'react'
import styles from './home.module.scss'

const Home: React.FC = () => {
  const handleAPI = () => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data, 'data'))
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Welcome to My App</h2>
        <p>This is the main page of the application.</p>
        <button onClick={handleAPI}>api 호출</button>
      </main>
    </div>
  )
}

export default Home
