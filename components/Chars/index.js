// redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadChars } from '../../redux/actions/charAction';
import Box from '../Box';

const Chars = () => {
  const content = useSelector((state) => state.chars);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  console.log(content);
  console.log(favorites.favorites);

  // const characters = () => {
  //   dispatch(onLoadChars());
  // };

  useEffect(() => {
    dispatch(onLoadChars());
  }, []);

  return (
    <div className='container'>
      {/* <h3>Chars</h3>
      {chars.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        );
      })} */}
      {/* <button onClick={() => dispatch(onLoadChars())}>LOAD</button> */}
      <div className='box'>
        {favorites.favorites &&
          favorites.favorites.map((item, index) => {
            return <Box hero={item} index={item.heroIndex >= 17 ? item.heroIndex - 2 : item.heroIndex - 1} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Chars;
