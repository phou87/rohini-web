import {useState, useEffect} from 'react';

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
    <h1>{num}</h1>
  );
}
