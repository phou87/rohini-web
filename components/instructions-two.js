import {BLOCK_TYPES} from '../shared/constants';
import styles from '../styles/Instructions.module.css'

const TEXT = {
  [BLOCK_TYPES.EXPRESS]: (
    <>
      {`Shortly, you will be presented with a set of images. Please view each image
        carefully. While viewing the images, please do your best to `}
      <span className={styles.yellow + ' ' + styles.underline}>express as fully as possible</span>
      {` any expression of the emotion you feel while viewing the images.
        Remember that the person viewing you can only see your head and part of your
        upper torso and cannot hear you. It is important for the sake of this study that
        you `}
      <span className={styles.yellow}>do your best to communicate what you are feeling.</span>
      {` So please do the best
        you can to `}
      <span className={styles.yellow}>
        behave in such a way that the person viewing you on a monitor will
        be able to guess what you are feeling while viewing the image.
      </span>
    </>
  ),

  [BLOCK_TYPES.SUPPRESS]: (
    <>
      {`Shortly, you will be presented with a set of images. Please view each image
      carefully. While viewing the images, please do your best to `}
      <span className={styles.yellow + ' ' + styles.underline}>suppress as fully as possible</span>
      {` any expression of the emotion you feel while viewing the images.
        Remember that the person viewing you can only see your head and part of your
        upper torso and cannot hear you. It is important for the sake of this study that
        you `}
      <span className={styles.yellow}>do your best to conceal what you are feeling.</span>
      {` So please do the best you can
        to `}
      <span className={styles.yellow}>
        behave in such a way that the person viewing you on a monitor will not be
        able to guess what you are feeling while viewing the images.
      </span>
    </>
  ),
  [BLOCK_TYPES.NORMAL]: (
    <>
      {`Shortly, you will be presented with a set of images. Please view each
        image carefully. `}
      <span className={styles.yellow}>
        No one will be reviewing this recording
      </span>
      {` while you view this set of images. `}
      <span className={styles.yellow}>
        Simply view the images in any way you would naturally do so.
      </span>
    </>
  ),
};

export function InstructionsTwo({blockType}) {
  return (
    <div className={styles.instructionsSmall}>
      <h3>
        {TEXT[blockType]}
      </h3>

      <div className={styles.verticalSpacer} />

      <h3>
        Before each image, focus your attention on the ‘+’ in the middle of the screen.
        After viewing each set of images, you will be asked to rate the emotional
        reactions you had to the images.
      </h3>

      <h3>Press ENTER to begin the experiment.</h3>

    </div>
  );
}
