import { useDispatch } from 'react-redux';
import { resetHeroes } from '../../redux/actions/favoriteAction';

const Favorites = () => {
  const dispatch = useDispatch();

  // const favorites = useSelector((state) => state.favorites);

  return <button onClick={() => dispatch(resetHeroes())}>Reset Favorites</button>;
};

export default Favorites;

// import React from 'react'

// const index = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default index
