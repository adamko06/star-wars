import styles from './index.module.scss';

import { useRouter } from 'next/router';

const Lyrics = () => {
  const router = useRouter();
  const handleAnimationEnd = (event) => {
    if (event.target.classList.contains(styles.lyrics_wrapper_scroll)) {
      router.push('/');
    }
  };

  return (
    <div className={styles.lyrics}>
      <div className={styles.lyrics_wrapper} onAnimationEnd={handleAnimationEnd}>
        <div className={styles.lyrics_wrapper_scroll}>
          <img src='/logo.svg' alt='logo'></img>
          <p>
            Welcome to this Star Wars app that introduces you to the heroes of the Star Wars world. In this app, you can click
            through the list of heroes, see more information about each hero, such as a list of the movies they've starred in.
          </p>
          <p>
            You can try out many features in this app, such as adding and removing heroes from your favorites, viewing information
            about each hero. You can even choose the "darkside" or "lightside" side of each hero that the hero represents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
