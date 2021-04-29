import styles from './index.module.sass'

// icons
import TwitterIcon from '../Icons/twitter'

export default function Form() {
  return (
    <form className={styles.form}>
      <small className={styles['form__small']}>We will be opening very soon, come back often and check us out!</small>
      
      <div className={styles['form__enter']}>
        <input className={styles['form__enter-input']} type="text" placeholder={'Enter the access cdoe here'} />
        <button className={styles['form__enter-button']}><TwitterIcon /> ACCESS SITE</button>
      </div>
    </form>
  );
}