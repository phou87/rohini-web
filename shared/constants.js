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
      '/images/3019.bmp',
      '/images/2053.bmp',
      '/images/2718.bmp',
      '/images/2205.bmp',
      '/images/6555.bmp',
    ],
    2: [
      '/images/1205.bmp',
      '/images/1304.bmp',
      '/images/9530.bmp',
      '/images/9433.bmp',
      '/images/9429.bmp',
    ],
    3: [
      '/images/9900.bmp',
      '/images/6244.bmp',
      '/images/2703.bmp',
      '/images/3051.bmp',
      '/images/3300.bmp',
    ],
    4: [
      '/images/9140.bmp',
      '/images/9500.bmp',
      '/images/9480.bmp',
      '/images/2375.1.bmp',
      '/images/3120.bmp',
    ],
    5: [
      '/images/9903.bmp',
      '/images/6220.bmp',
      '/images/9183.bmp',
      '/images/3266.bmp',
      '/images/9584.bmp',
    ],
    6: [
      '/images/9910.bmp',
      '/images/3250.bmp',
      '/images/2751.bmp',
      '/images/9185.bmp',
      '/images/9560.bmp',
    ],
  },
  [AGE_GROUPS.Child]: {
    1: [
      '/images/9908.bmp',
      '/images/9043.bmp',
      '/images/9050.bmp',
      '/images/9320.bmp',
      '/images/3019.bmp',
    ],
    2: [
      '/images/9910.bmp',
      '/images/2688.bmp',
      '/images/9900.bmp',
      '/images/9622.bmp',
      '/images/9592.bmp',
    ],
    3: [
      '/images/6260.bmp',
      '/images/3181.bmp',
      '/images/3212.bmp',
      '/images/9326.bmp',
      '/images/6571.bmp',
    ],
    4: [
      '/images/9903.bmp',
      '/images/2205.bmp',
      '/images/7380.bmp',
      '/images/9220.bmp',
      '/images/9145.bmp',
    ],
    5: [
      '/images/9570.bmp',
      '/images/2799.bmp',
      '/images/9250.bmp',
      '/images/3230.bmp',
      '/images/9332.bmp',
    ],
    6: [
      '/images/9185.bmp',
      '/images/2141.bmp',
      '/images/9600.bmp',
      '/images/9561.bmp',
      '/images/2981.bmp',
    ],
  },
  [AGE_GROUPS.Teen]: {
    1: [
      '/images/9902.bmp',
      '/images/9611.bmp',
      '/images/9250.bmp',
      '/images/3019.bmp',
      '/images/9001.bmp',
    ],
    2: [
      '/images/9921.bmp',
      '/images/2799.bmp',
      '/images/2141.bmp',
      '/images/9041.bmp',
      '/images/6020.bmp',
    ],
    3: [
      '/images/2205.bmp',
      '/images/6415.bmp',
      '/images/3181.bmp',
      '/images/6231.bmp',
      '/images/9570.bmp',
    ],
    4: [
      '/images/9050.bmp',
      '/images/7380.bmp',
      '/images/9600.bmp',
      '/images/8230.bmp',
      '/images/9908.bmp',
    ],
    5: [
      '/images/2981.bmp',
      '/images/9520.bmp',
      '/images/3230.bmp',
      '/images/9140.bmp',
      '/images/9480.bmp',
    ],
    6: [
      '/images/9320.bmp',
      '/images/9425.bmp',
      '/images/3212.bmp',
      '/images/3185.bmp',
      '/images/1202.bmp',
    ],
  },
};
