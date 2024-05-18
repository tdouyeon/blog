import React from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Welcome to My App</h2>
        <p>This is the main page of the application.</p>
      </main>
    </div>
  );
};

export default Home;