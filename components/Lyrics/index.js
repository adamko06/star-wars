import styles from './index.module.scss';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const index = () => {
  const [observer, setObserver] = useState(false);

  const { ref: lastParaghraphRef, inView: lastParaghraphIsVisible } = useInView({ triggerOnce: true });

  // lastParaghraphIsVisible && setObserver(true);
  console.log(lastParaghraphIsVisible);
  // console.log('observer', observer);

  return (
    <div className={styles.lyrics}>
      <div className={styles.lyrics_wrapper}>
        <div className={styles.lyrics_wrapper_scroll}>
          <h1>STAR WARS</h1>
          <h2>Scrolling Text Effect</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut cupiditate unde ipsam ut fugit deleniti non
            autem, ab, tempore ratione quo, nihil delectus sequi incidunt voluptates quis. Expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut cupiditate unde ipsam ut fugit deleniti non
            autem, ab, tempore ratione quo, nihil delectus sequi incidunt voluptates quis. Expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut cupiditate unde ipsam ut fugit deleniti non
            autem, ab, tempore ratione quo, nihil delectus sequi incidunt voluptates quis. Expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut cupiditate unde ipsam ut fugit deleniti non
            autem, ab, tempore ratione quo, nihil delectus sequi incidunt voluptates quis. Expedita!
          </p>
          <p ref={lastParaghraphRef}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut cupiditate unde ipsam ut fugit deleniti non
            autem, ab, tempore ratione quo, nihil delectus sequi incidunt voluptates quis. Expedita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
