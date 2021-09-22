import React, {useState, useEffect} from 'react';
import {STEPS, KEYCODES, BLOCK_TO_BLOCK_TYPE} from '../shared/constants';
import {Intro} from './intro';
import {Instructions} from './instructions';
import {InstructionsTwo} from './instructions-two';
import {Countdown} from './countdown';
import {Block} from './block';
import {End} from './end';
import{ init, send } from 'emailjs-com';
import styles from '../styles/Home.module.css'

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

export function Experiment() {
  const [globalState, setGlobalState] = useState({
    step: STEPS.Intro,
    block: 0,
    blockOrder: shuffleArray([1, 2, 3, 4, 5, 6]),
    ratings: [0, 0, 0, 0, 0, 0],
    blockOrderRatings: [0, 0, 0, 0, 0, 0],
    username: '',
    ageGroup: null,
    blockBeginTimestamps: [0, 0, 0, 0, 0, 0],
    blockEndTimestamps: [0, 0, 0, 0, 0, 0],
    pictureBeginTimestamps: [0, 0, 0, 0, 0, 0],
    pictureEndTimestamps: [0, 0, 0, 0, 0, 0],
    taskBeginTimestamp: 0,
  });

  const [resultsSent, setResultsSent] = useState(false);

  useEffect(() => {
    init('user_UnI50fwe7uvL3JuEFBt1Y');
    setGlobalState(prevState => ({
      ...prevState,
      taskBeginTimestamp: Date.now(),
    }));
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode !== KEYCODES.Enter) {
        return;
      }

      switch (globalState.step) {
        case STEPS.Instructions:
          setGlobalState(prevState => ({
            ...prevState,
            step: STEPS.InstructionsTwo,
          }));
          break;
        case STEPS.InstructionsTwo:
          setGlobalState(prevState => ({
            ...prevState,
            step: STEPS.Countdown,
          }));
          break;
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  });

  useEffect(async () => {
    if (globalState.step === STEPS.InstructionsTwo) {
      const blockBeginTimestamps = globalState.blockBeginTimestamps.slice();
      blockBeginTimestamps[globalState.block] = Date.now();
      setGlobalState(prevState => ({
        ...prevState,
        blockBeginTimestamps,
      }));
    }

    if (globalState.step === STEPS.End) {
      await fetch('/api/save', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
          blockOrder: globalState.blockOrder,
          blockOrderRatings: globalState.blockOrderRatings,
          ratings: globalState.ratings,
          username: globalState.username,
          blockBeginTimestamps: globalState.blockBeginTimestamps,
          blockEndTimestamps: globalState.blockEndTimestamps,
          pictureBeginTimestamps: globalState.pictureBeginTimestamps,
          pictureEndTimestamps: globalState.pictureEndTimestamps,
          taskBeginTimestamp: globalState.taskBeginTimestamp,
          taskEndTimestamp: Date.now(),
        }),
      });

      setResultsSent(true);
    }
  }, [globalState.step]);

  const block = globalState.blockOrder[globalState.block];
  const blockType = BLOCK_TO_BLOCK_TYPE[block];

  switch (globalState.step) {
    case STEPS.Intro:
      return (
        <div className={styles.paddedContainer}>
          <Intro
            ageGroup={globalState.ageGroup}
            username={globalState.username}
            setAgeGroup={ageGroup => {
              setGlobalState(prevState => ({
                ...prevState,
                ageGroup,
              }));
            }}
            setUsername={username => {
              setGlobalState(prevState => ({
                ...prevState,
                username,
              }));
            }}
            onBegin={() => {
              setGlobalState(prevState => ({
                ...prevState,
                step: STEPS.Instructions,
              }));
            }}
          />
        </div>
      );
    case STEPS.Instructions:
      return (
        <div className={styles.paddedContainer}>
          <Instructions />
        </div>
      );
    case STEPS.InstructionsTwo:
      return (
        <div className={styles.paddedContainer}>
          <InstructionsTwo blockType={blockType} />
        </div>
      );
    case STEPS.Countdown:
      return (
        <div className={styles.paddedContainer}>
          <Countdown done={() => {
            setGlobalState(prevState => ({
              ...prevState,
              step: STEPS.Block,
            }));
          }} />
        </div>
      );
    case STEPS.Block:
      return (
        <Block
          ageGroup={globalState.ageGroup}
          block={block}
          key={block}
          rateBlock={(block, rating) => {
            const ratings = globalState.ratings.slice();
            ratings[block - 1] = rating;
            const blockOrderRatings = globalState.blockOrderRatings.slice();
            blockOrderRatings[globalState.block] = rating;
            setGlobalState(prevState => ({
              ...prevState,
              blockOrderRatings,
              ratings,
            }));
          }}
          finishBlock={() => {
            const blockEndTimestamps = globalState.blockEndTimestamps.slice();
            blockEndTimestamps[globalState.block] = Date.now();
            setGlobalState(prevState => ({
              ...prevState,
              blockEndTimestamps,
            }));

            if (globalState.block === 5) {
              setGlobalState(prevState => ({
                ...prevState,
                step: STEPS.End,
              }));
            } else {
              setGlobalState(prevState => ({
                ...prevState,
                step: STEPS.InstructionsTwo,
                block: globalState.block + 1,
              }));
            }
          }}
          setPictureBeginTimestamp={() => {
            const pictureBeginTimestamps = globalState.pictureBeginTimestamps.slice();
            pictureBeginTimestamps[globalState.block] = Date.now();
            setGlobalState(prevState => ({
              ...prevState,
              pictureBeginTimestamps,
            }));
          }}
          setPictureEndTimestamp={() => {
            const pictureEndTimestamps = globalState.pictureEndTimestamps.slice();
            pictureEndTimestamps[globalState.block] = Date.now();
            setGlobalState(prevState => ({
              ...prevState,
              pictureEndTimestamps,
            }));
          }}
        />
      );
    case STEPS.End:
      return (
        <div className={styles.paddedContainer}>
          <End resultsSent={resultsSent} />
        </div>
      );
  }

  return null;
}
