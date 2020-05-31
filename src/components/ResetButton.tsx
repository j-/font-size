import * as React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../store/actions';

const ResetButton: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(reset());
  };
  return (
    <button
      className="btn btn-light"
      type="button"
      onClick={handleClick}
    >
      Reset
    </button>
  );
};

export default ResetButton;
