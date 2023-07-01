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

export const VERSIONS = {
  1: 1,
  2: 2,
}

export const BLOCK_TO_BLOCK_TYPE = {
  1: BLOCK_TYPES.EXPRESS,
  2: BLOCK_TYPES.EXPRESS,
  3: BLOCK_TYPES.SUPPRESS,
  4: BLOCK_TYPES.SUPPRESS,
  5: BLOCK_TYPES.NORMAL,
  6: BLOCK_TYPES.NORMAL,
};

export const BLOCKS_VERSION_1 = {
  [AGE_GROUPS.Adult]: {
    1: [
      '/images/3015.bmp',
      '/images/2703.bmp',
      '/images/3400.bmp',
      '/images/1050.bmp',
      '/images/1280.bmp',
    ],
    2: [
      '/images/9183.bmp',
      '/images/9253.bmp',
      '/images/2799.bmp',
      '/images/9530.bmp',
      '/images/9480.bmp',
    ],
    3: [
      '/images/3080.bmp',
      '/images/2205.bmp',
      '/images/9903.bmp',
      '/images/6244.bmp',
      '/images/9596.bmp',
    ],
    4: [
      '/images/3530.bmp',
      '/images/9560.bmp',
      '/images/2053.bmp',
      '/images/9342.bmp',
      '/images/9912.bmp',
    ],
    5: [
      '/images/3131.bmp',
      '/images/9185.bmp',
      '/images/6243.bmp',
      '/images/7361.bmp',
      '/images/2718.bmp',
    ],
    6: [
      '/images/2800.bmp',
      '/images/6022.bmp',
      '/images/3220.bmp',
      '/images/6250.bmp',
      '/images/6555.bmp',
    ],
  },
  [AGE_GROUPS.Child]: {
    1: [
      '/images/9320.bmp',
      '/images/9043.bmp',
      '/images/9900.bmp',
      '/images/3181.bmp',
      '/images/3019.bmp',
    ],
    2: [
      '/images/6260.bmp',
      '/images/2688.bmp',
      '/images/9220.bmp',
      '/images/9185.bmp',
      '/images/3212.bmp',
    ],
    3: [
      '/images/2981.bmp',
      '/images/9622.bmp',
      '/images/3230.bmp',
      '/images/9050.bmp',
      '/images/6571.bmp',
    ],
    4: [
      '/images/7380.bmp',
      '/images/9570.bmp',
      '/images/9561.bmp',
      '/images/2141.bmp',
      '/images/9903.bmp',
    ],
    5: [
      '/images/2205.bmp',
      '/images/9592.bmp',
      '/images/9908.bmp',
      '/images/9326.bmp',
      '/images/2799.bmp',
    ],
    6: [
      '/images/9910.bmp',
      '/images/9250.bmp',
      '/images/9145.bmp',
      '/images/9600.bmp',
      '/images/9332.bmp',
    ],
  },
  [AGE_GROUPS.Teen]: {
    1: [
      '/images/9902.bmp',
      '/images/3185.bmp',
      '/images/9908.bmp',
      '/images/9250.bmp',
      '/images/6231.bmp',
    ],
    2: [
      '/images/9041.bmp',
      '/images/9570.bmp',
      '/images/2205.bmp',
      '/images/9480.bmp',
      '/images/9520.bmp',
    ],
    3: [
      '/images/9611.bmp',
      '/images/9140.bmp',
      '/images/3212.bmp',
      '/images/7380.bmp',
      '/images/2799.bmp',
    ],
    4: [
      '/images/1202.bmp',
      '/images/9425.bmp',
      '/images/9921.bmp',
      '/images/9320.bmp',
      '/images/8230.bmp',
    ],
    5: [
      '/images/2981.bmp',
      '/images/9001.bmp',
      '/images/6415.bmp',
      '/images/2141.bmp',
      '/images/3181.bmp',
    ],
    6: [
      '/images/3019.bmp',
      '/images/9600.bmp',
      '/images/3230.bmp',
      '/images/9050.bmp',
      '/images/6020.bmp',
    ],
  },
};

export const BLOCKS_VERSION_2 = {
  [AGE_GROUPS.Adult]: {
    1: [
      '/images/3015.bmp',
      '/images/2703.bmp',
      '/images/3400.bmp',
      '/images/1050.bmp',
      '/images/1280.bmp',
    ],
    2: [
      '/images/9183.bmp',
      '/images/9253.bmp',
      '/images/2799.bmp',
      '/images/9530.bmp',
      '/images/9480.bmp',
    ],
    3: [
      '/images/3080.bmp',
      '/images/2205.bmp',
      '/images/9903.bmp',
      '/images/6244.bmp',
      '/images/9596.bmp',
    ],
    4: [
      '/images/3530.bmp',
      '/images/9560.bmp',
      '/images/2053.bmp',
      '/images/9342.bmp',
      '/images/9912.bmp',
    ],
    5: [
      '/images/3131.bmp',
      '/images/9185.bmp',
      '/images/6243.bmp',
      '/images/7361.bmp',
      '/images/2718.bmp',
    ],
    6: [
      '/images/2800.bmp',
      '/images/6022.bmp',
      '/images/3220.bmp',
      '/images/6250.bmp',
      '/images/6555.bmp',
    ],
  },
  [AGE_GROUPS.Child]: {
    1: [
      '/images/9230.bmp',
      '/images/9332.bmp',
      '/images/1111.bmp',
      '/images/2703.bmp',
      '/images/9600.bmp',
    ],
    2: [
      '/images/9622.bmp',
      '/images/1120.bmp',
      '/images/9220.bmp',
      '/images/9050.bmp',
      '/images/7380.bmp',
    ],
    3: [
      '/images/3220.bmp',
      '/images/9145.bmp',
      '/images/9445.bmp',
      '/images/3230.bmp',
      '/images/9908.bmp',
    ],
    4: [
      '/images/9326.bmp',
      '/images/9031.bmp',
      '/images/9561.bmp',
      '/images/1201.bmp',
      '/images/2141.bmp',
    ],
    5: [
      '/images/7361.bmp',
      '/images/9043.bmp',
      '/images/2205.bmp',
      '/images/9903.bmp',
      '/images/1932.bmp',
    ],
    6: [
      '/images/9910.bmp',
      '/images/3300.bmp',
      '/images/9592.bmp',
      '/images/9320.bmp',
      '/images/2688.bmp',
    ],
  },
  [AGE_GROUPS.Teen]: {
    1: [
      '/images/2703.bmp',
      '/images/9902.bmp',
      '/images/7380.bmp',
      '/images/9001.bmp',
      '/images/9480.bmp',
    ],
    2: [
      '/images/2141.bmp',
      '/images/9050.bmp',
      '/images/9043.bmp',
      '/images/3185.bmp',
      '/images/6020.bmp',
    ],
    3: [
      '/images/9185.bmp',
      '/images/9908.bmp',
      '/images/9600.bmp',
      '/images/8230.bmp',
      '/images/9230.bmp',
    ],
    4: [
      '/images/9140.bmp',
      '/images/3230.bmp',
      '/images/9611.bmp',
      '/images/9031.bmp',
      '/images/1202.bmp',
    ],
    5: [
      '/images/2205.bmp',
      '/images/2799.bmp',
      '/images/9320.bmp',
      '/images/9041.bmp',
      '/images/9186.bmp',
    ],
    6: [
      '/images/9326.bmp',
      '/images/9520.bmp',
      '/images/3300.bmp',
      '/images/3212.bmp',
      '/images/9145.bmp',
    ],
  },
};

export const BLOCKS_BY_VERSION = {
  1: BLOCKS_VERSION_1,
  2: BLOCKS_VERSION_2,
};
