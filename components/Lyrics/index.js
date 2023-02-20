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
            about each hero, or even using React hooks and redux to manage the app's state.
          </p>
          <p>
            You can even choose the "darkside" or "lightside" side of each hero that the hero represents. In addition, the user
            can view additional information about the hero, including their race, appearance, and a short description. This
            information is retrieved from the database and displayed on the page using GraphQL - api. The goal of this application
            is to provide users with an overview of the different characters from the Star Wars world and to allow them to express
            their liking for these heroes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
