import {useEffect, useState} from 'react';
import { RadioGroup, Radio, ALIGN } from 'baseui/radio';
import { Button } from "baseui/button";
import { init, send } from 'emailjs-com';
import {BLOCKS, BLOCK_STEPS} from '../shared/constants';
import styles from '../styles/experiment.module.css'

export function Block(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [rating, setRating] = useState(null);
  const [step, setStep] = useState(BLOCK_STEPS.Cross);
  const {block, rateBlock} = props;

  useEffect(() => {
    switch (step) {
      case BLOCK_STEPS.Cross:
        setTimeout(() => {
          setStep(BLOCK_STEPS.Image);
        }, 400);
        break;
      case BLOCK_STEPS.Image:
        setTimeout(() => {
          if (currentImage === 5) {
            setStep(BLOCK_STEPS.Rate);
          }
          else {
            setStep(BLOCK_STEPS.Cross);
            setCurrentImage(currentImage + 1);
          }
        }, 1000);
        break;
    }
  }, [step]);

  switch (step) {
    case BLOCK_STEPS.Cross:
      return <h1>+</h1>;
    case BLOCK_STEPS.Image:
      return <img src={BLOCKS.Adult[block][currentImage]} />
    case BLOCK_STEPS.Rate:
      return (
        <>
          <h3>
            While viewing the set of 5 pictures just presented, please indicate the
            extent that you experienced negative emotion (e.g. anger, revulsion,
            sadness, distress) by typing a number between 1 and 7.
          </h3>
          <img className={styles.ratingImg} src="/images/emotion-rate.png" />
          <RadioGroup
            value={String(rating)}
            onChange={e => setRating(Number(e.target.value))}
            name="number"
            align={ALIGN.horizontal}
          >
            {[1, 2, 3, 4, 5, 6, 7].map(r => (
              <Radio key={r} value={String(r)}>{r}</Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => {
            rateBlock(block, rating);
            setStep(BLOCK_STEPS.End);
          }}>Submit</Button>
        </>
      )
    case BLOCK_STEPS.End:
      return (
        <>
          <h3>Some kind of end screen?</h3>
        </>
      );
  }

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
      <main>
        {BlockImages[block].map(image => (
            <img src={image} />
        ))}
        <div>
          <button onClick={() => setCurrentBlock(currentBlock + 1)}>Next</button>
        </div>
      </main>
  );
}
