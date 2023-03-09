import { useDispatch } from 'react-redux';
import { goDefaultPage } from '../../redux/actions/pageAction';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const FilterDropdown = ({ handleClick, actualSelection }) => {
  let title = '';
  switch (actualSelection) {
    case 4:
      title = 'The Phantom Menace';
      break;
    case 5:
      title = 'Attack of the Clones';
      break;
    case 6:
      title = 'Revenge of the Sith';
      break;
    case 1:
      title = 'A New Hope';
      break;
    case 2:
      title = 'The Empire Strikes Back';
      break;
    case 3:
      title = 'Return of the Jedi';
      break;
    default:
      title = 'Filter By Movie';
  }

  const dispatch = useDispatch();

  const handleChange = (number) => {
    handleClick(number);
    dispatch(goDefaultPage());
  };

  return (
    <>
      <DropdownButton id='dropdown-basic-button' title={title}>
          <Dropdown.Item onClick={() => handleChange(0)}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(4)}>Episode I</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(5)}>Episode II</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(6)}>Episode III</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(1)}>Episode IV</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(2)}>Episode V</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange(3)}>Episode VI</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default FilterDropdown;
