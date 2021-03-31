import {BLOCK_TYPES} from '../shared/constants';

const TEXT = {
  [BLOCK_TYPES.EXPRESS]:
  `
    Shortly, you will be presented with a set of images. Please view each image
    carefully. While viewing the images, please do your best to express as fully as
    possible any expression of the emotion you feel while viewing the images.
    Remember that the person viewing you can only see your head and part of your
    upper torso and cannot hear you. It is important for the sake of this study that
    you do your best to communicate what you are feeling. So please do the best
    you can to behave in such a way that the person viewing you on a monitor will
    be able to guess what you are feeling while viewing the image.
  `,
  [BLOCK_TYPES.SUPPRESS]:
  `
    Shortly, you will be presented with a set of images. Please view each image
    carefully. While viewing the images, please do your best to suppress as fully as
    possible any expression of the emotion you feel while viewing the images.
    Remember that the person viewing you can only see your head and part of your
    upper torso and cannot hear you. It is important for the sake of this study that
    you do your best to conceal what you are feeling. So please do the best you can
    to behave in such a way that the person viewing you on a monitor will not be
    able to guess what you are feeling while viewing the images.
  `,
  [BLOCK_TYPES.NORMAL]:
  `
    Shortly, you will be presented with a set of images. Please view each
    image carefully. No one will be reviewing this recording while you
    view this set of images. Simply view the images in any way you
    would naturally do so.
  `
};

export function InstructionsTwo({blockType}) {
  return (
    <>
      <h3>
        {TEXT[blockType]}
      </h3>

      <h3>
        Before each image, focus your attention on the ‘+’ in the middle of the screen.
        After viewing each set of images, you will be asked to rate the emotional
        reactions you had to the images.
      </h3>

      <h3>Press ENTER to begin the experiment.</h3>

    </>
  );
}
