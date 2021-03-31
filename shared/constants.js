export const STEPS = {
  Intro: 0,
  Instructions: 1,
  InstructionsTwo: 2,
  Countdown: 3,
  Block: 4,
  End: 5,
};

export const BLOCK_STEPS = {
  Cross: 0,
  Image: 1,
  Rate: 2,
  End: 3,
};

export const AGE_GROUPS = {
  Adult: 0,
  Child: 1,
  Teen: 2,
};

export const KEYCODES = {
  Enter: 13,
};

export const BLOCK_TYPES = {
  EXPRESS: 0,
  SUPPRESS: 1,
  NORMAL: 2,
}

export const BLOCK_TO_BLOCK_TYPE = {
  1: BLOCK_TYPES.EXPRESS,
  2: BLOCK_TYPES.EXPRESS,
  3: BLOCK_TYPES.SUPPRESS,
  4: BLOCK_TYPES.SUPPRESS,
  5: BLOCK_TYPES.NORMAL,
  6: BLOCK_TYPES.NORMAL,
};

export const BLOCKS = {
  [AGE_GROUPS.Adult]: {
    1: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    2: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    3: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    4: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    5: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    6: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
  },
  [AGE_GROUPS.Child]: {
    1: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    2: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    3: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    4: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    5: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    6: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
  },
  [AGE_GROUPS.TEEN]: {
    1: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    2: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    3: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    4: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    5: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
    6: [
      '/images/bugs.png',
      '/images/daffy.png',
      '/images/devil.png',
      '/images/sylvester.png',
      '/images/tweety.png',
      '/images/wile.jpeg',
    ],
  },
};
