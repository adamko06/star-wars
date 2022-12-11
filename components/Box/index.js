import Link from 'next/link';
import imgs from '../../config/imgs';

const Box = (props) => {
  return (
    <div className='box_item' key={props.index > 10}>
      <Link href={`hero/${props.index > 16 ? props.index + 2 : props.index + 1}`}>
        <a>
          <img
            src={
              imgs[props.hero.name] ||
              'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
            }
          />
          <div className='overlay'>
            <div className='text'>{props.hero.name}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Box;
