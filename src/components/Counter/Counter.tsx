import { useState } from 'react';
import * as styles from './counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className={styles?.wrapper}>
      <h1>{counter}</h1>
      <button className={styles?.button} onClick={handleClick}>
        Plus 1
      </button>
    </div>
  );
};

export default Counter;
