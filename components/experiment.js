import React, {useState, useEffect} from 'react';
import {STEPS, KEYCODES} from '../shared/constants';
import {Intro} from './intro';
import {Instructions} from './instructions';
import {InstructionsTwo} from './instructions-two';
import {Countdown} from './countdown';
import {Block} from './block';
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
    step: STEPS.Instructions,
    block: 1,
    blockOrder: shuffleArray([1, 2, 3, 4, 5, 6]),
    ratings: [0, 0, 0, 0, 0, 0],
  });

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
          setGlobalState({
            ...globalState,
            step: STEPS.InstructionsTwo,
          });
          break;
        case STEPS.InstructionsTwo:
          setGlobalState({
            ...globalState,
            step: STEPS.Countdown,
          });
          break;
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  });

  switch (globalState.step) {
    case STEPS.Intro:
      return <Intro />;
    case STEPS.Instructions:
      return <Instructions />;
    case STEPS.InstructionsTwo:
      return <InstructionsTwo />;
    case STEPS.Countdown:
      return <Countdown done={() => {
        setGlobalState({
          ...globalState,
          step: STEPS.Block,
        })
      }} />;
    case STEPS.Block:
      return <Block block={globalState.blockOrder[globalState.block]} rateBlock={(block, rating) => {
        const ratings = globalState.ratings.slice();
        ratings[block] = rating;
        setGlobalState({
          ...globalState,
          ratings,
        });
      }} />;
  }
}