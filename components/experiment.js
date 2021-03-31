import React, {useState, useEffect} from 'react';
import {STEPS, KEYCODES, BLOCK_TO_BLOCK_TYPE} from '../shared/constants';
import {Intro} from './intro';
import {Instructions} from './instructions';
import {InstructionsTwo} from './instructions-two';
import {Countdown} from './countdown';
import {Block} from './block';
import {End} from './end';
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

export function Experiment() {
  const [globalState, setGlobalState] = useState({
    step: STEPS.Intro,
    block: 0,
    blockOrder: shuffleArray([1, 2, 3, 4, 5, 6]),
    ratings: [0, 0, 0, 0, 0, 0],
    username: '',
    ageGroup: null,
  });

  const [resultsSent, setResultsSent] = useState(false);

  useEffect(() => {
    init('user_UnI50fwe7uvL3JuEFBt1Y');
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
    if (globalState.step !== STEPS.End) {
      return;
    }

    await fetch('/api/save', {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({
        blockOrder: globalState.blockOrder,
        ratings: globalState.ratings,
        username: globalState.username,
      }),
    });

    setResultsSent(true);
  }, [globalState.step]);

  const block = globalState.blockOrder[globalState.block];
  const blockType = BLOCK_TO_BLOCK_TYPE[block];

  switch (globalState.step) {
    case STEPS.Intro:
      return (
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
      );
    case STEPS.Instructions:
      return <Instructions />;
    case STEPS.InstructionsTwo:
      return <InstructionsTwo blockType={blockType} />;
    case STEPS.Countdown:
      return <Countdown done={() => {
        setGlobalState(prevState => ({
          ...prevState,
          step: STEPS.Block,
        }));
      }} />;
    case STEPS.Block:
      return (
        <Block
          ageGroup={globalState.ageGroup}
          block={block}
          key={block}
          rateBlock={(block, rating) => {
            const ratings = globalState.ratings.slice();
            ratings[block - 1] = rating;
            setGlobalState(prevState => ({
              ...prevState,
              ratings,
            }));
          }}
          finishBlock={() => {
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
        />
      );
    case STEPS.End:
      return <End resultsSent={resultsSent} />;
  }

  return null;
}
