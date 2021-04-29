import styles from './index.module.sass';

export default function Header({ title, description }) {
  return (
    <div className={styles.header}>
      <h1 className={styles['header__title']}>{title}</h1>
      <span className={styles['header__description']}>{description}</span>
    </div>
  );
}