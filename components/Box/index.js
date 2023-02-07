import Link from 'next/link';
import imgs from '../../config/imgs';

import styles from './index.module.scss';

const Box = (props) => {
  const actualHeroSide = props.favorites?.map((hero) => {
    if (hero.side === 'light') {
      return styles.box_item_light;
    }
    if (hero.side === 'dark') {
      return styles.box_item_dark;
    } else {
      return '';
    }
  });

  return (
    <div className={styles.box_item} key={props.index > 10}>
      <Link href={`hero/${props.index > 16 ? props.index + 2 : props.index + 1}`}>
        <a>
          <img
            className={actualHeroSide?.[props?.keyIndex]}
            src={
              imgs[props.hero.name] ||
              'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
            }
          />

          <div className={styles.box_item_overlay}>
            <div className={styles.box_item_text}>{props.hero.name}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Box;
