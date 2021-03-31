import {useState, useEffect} from 'react';
import styles from '../styles/Experiment.module.css'

export function Countdown(props) {
  const [num, setNum] = useState(3);

  useEffect(() => {
    if (num > 0) {
      setTimeout(() => {
        setNum(num - 1);
      }, 1000);
    } else {
      props.done();
    }
  }, [num]);

  return (
    <div className={styles.countdown}>{num}</div>
  );
}
