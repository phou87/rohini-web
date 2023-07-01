import {useState, useEffect} from 'react';
import styles from '../styles/Experiment.module.css'
import {useDebugMode} from '../util/use-debug-mode';

export function Countdown(props) {
  const [num, setNum] = useState(3);
  const {getWaitTime} = useDebugMode();

  useEffect(() => {
    if (num > 0) {
      setTimeout(() => {
        setNum(num - 1);
      }, getWaitTime(1000));
    } else {
      props.done();
    }
  }, [num]);

  return (
    <div className={styles.countdown}>{num}</div>
  );
}
