import Link from 'next/link';
import imgs from '../../config/imgs';

import styles from './index.module.scss';

const Box = ({ heroes, hero, keyIndex }) => {
  const actualHeroSide = heroes?.map((hero) => {
    if (hero.isFavorite === true) {
      if (hero.side === 'light') {
        return styles.box_item_light;
      }
      if (hero.side === 'dark') {
        return styles.box_item_dark;
      } else {
        return '';
      }
    }
  });

  return (
      <div className={styles.box_item} key={hero.id}>
        <Link href={`hero/${hero.id}`}>
          <a>
            <img
              className={actualHeroSide?.[keyIndex]}
              src={
                imgs[hero.name] ||
                'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
              }
            />

            <div className={styles.box_item_overlay}>
              <div className={styles.box_item_text}>{hero.name}</div>
            </div>
          </a>
        </Link>
      </div>
  );
};

export default Box;
