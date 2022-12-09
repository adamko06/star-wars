import Link from 'next/link';
import imgs from '../../config/imgs';

const Box = (item, index) => {
  return (
    <div className='box_item' key={index}>
      <Link href={`hero/${index + 1}`}>
        <a>
          <img
            src={
              imgs[item.name] ||
              'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
            }
          />
          <div className='overlay'>
            <div className='text'>{item.name}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Box;
