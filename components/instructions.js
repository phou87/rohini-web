import styles from '../styles/Instructions.module.css'

export function Instructions() {
  return (
    <div className={styles.instructions}>
      <h2>The experiment is about to begin. Please make sure this window is on full screen.</h2>
      <br />
      <br />
      <h2>Press <span className={styles.underline}>ENTER</span> to continue.</h2>
    </div>
  );
}
