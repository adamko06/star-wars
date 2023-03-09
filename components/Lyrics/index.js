import { useRouter } from 'next/router';

import lyrics from '../../config/lyricsConfig';

import styles from './index.module.scss';

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
          <img src='/logo.png' alt='logo'></img>
          {lyrics.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
