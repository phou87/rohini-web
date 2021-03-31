import {useEffect, useState} from 'react';
import { RadioGroup, Radio, ALIGN } from 'baseui/radio';
import { Button } from "baseui/button";
import {BLOCKS, BLOCK_STEPS} from '../shared/constants';
import styles from '../styles/Experiment.module.css'

export function Block(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [rating, setRating] = useState(null);
  const [step, setStep] = useState(BLOCK_STEPS.Cross);
  const {ageGroup, block, rateBlock, finishBlock} = props;

  useEffect(() => {
    switch (step) {
      case BLOCK_STEPS.Cross:
        setTimeout(() => {
          setStep(BLOCK_STEPS.Image);
        }, 4000);
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
        }, 10000);
        break;
    }
  }, [step]);

  switch (step) {
    case BLOCK_STEPS.Cross:
      return <div className={styles.cross}>+</div>;
    case BLOCK_STEPS.Image:
      return <img src={BLOCKS[ageGroup][block][currentImage]} />
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
          <Button disabled={rating === null} onClick={() => {
            rateBlock(block, rating);
            finishBlock();
            // setStep(BLOCK_STEPS.End);
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
