import {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
import{ init, send } from 'emailjs-com';

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const BlockImages = {
  1: [
    '/images/bugs.png',
  ],
  2: [
    '/images/daffy.png',
  ],
  3: [
    '/images/devil.png',
  ],
  4: [
    '/images/sylvester.png',
  ],
  5: [
    '/images/tweety.png',
  ],
  6: [
    '/images/wile.jpeg',
  ]
};

export default function Blocks() {
  const [blocks, setBlocks] = useState([]);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    init('user_UnI50fwe7uvL3JuEFBt1Y');
    setBlocks(shuffleArray([1, 2, 3, 4, 5, 6]))
  }, []);

  if (finished) {
    return (
      <div className={styles.container}>
        Thank you!
      </div>
    );
  }

  const block = blocks[currentBlock];
  console.log(currentBlock)
  if (currentBlock === 6) {
    return (
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Please rate the negativity of the pictures you saw.
          </h1>
          <div>
            {[1,2,3,4,5].map(rating => (
              <button onClick={async () => {
                const message = `A user gave a negativity rating of ${rating}. The block order was ${blocks.toString()}.`;
                await send('service_9mfs9bj', 'template_tjtqvxb', {message});
                setFinished(true);
              }}>{rating}</button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (!block) {
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        {BlockImages[block].map(image => (
            <img src={image} />
        ))}
        <div>
          <button onClick={() => setCurrentBlock(currentBlock + 1)}>Next</button>
        </div>
      </main>
    </div>
  );
}
