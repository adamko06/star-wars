// redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadChars } from '../../redux/actions/charAction';

const Chars = () => {
  const chars = useSelector((state) => state.chars);
  const dispatch = useDispatch();

  // const characters = () => {
  //   dispatch(onLoadChars());
  // };

  console.log(chars);

  useEffect(() => {
    dispatch(onLoadChars());
  }, []);

  return (
    <div className='container'>
      <h3>Chars</h3>
      {chars.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
      {/* <button onClick={() => dispatch(onLoadChars())}>LOAD</button> */}
    </div>
  );
};

export default Chars;
