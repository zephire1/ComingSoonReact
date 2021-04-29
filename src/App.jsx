import styles from './styles/pages/main.module.sass';
import { motion } from 'framer-motion';

// components
import Header from './components/Header';
import Form from './components/Form';

// animation
import { PageLoad, Transition } from './components/Animations'

export default function App() {
  return (
    <motion.main
      className={styles.main}
      initial="in"
      animate="out"
      exit="in"
      variants={PageLoad}
      transition={Transition}
    >
      <Header title={`WebSiteTitle`} description={`Very small and detailed description of this site`} />
      <h1 className={styles['main__comingText']}>COMING VERY SOON!</h1>
      <Form />
    </motion.main>
  );
}