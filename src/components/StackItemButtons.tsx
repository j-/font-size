import * as React from 'react';
import { useDispatch } from 'react-redux';
import { canMoveUp, canMoveDown, canRemove } from '../store';
import { useSelector } from '../store/use-selector';
import { remove, swap } from '../store/actions';

export interface Props {
  index: number;
}

const StackItemButtons: React.FC<Props> = ({ index }) => {
  const dispatch = useDispatch();
  const enableMoveUp = useSelector((state) => canMoveUp(state, index));
  const enableMoveDown = useSelector((state) => canMoveDown(state, index));
  const enableRemove = useSelector((state) => canRemove(state, index));
  const handleRemove: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(remove(index));
  };
  const handleMoveUp: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(swap(index, index - 1));
  };
  const handleMoveDown: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(swap(index, index + 1));
  };
  return (
    <div className="StackItemButtons">
      <button
        className="btn btn-dark ml-3"
        type="button"
        title="Move up"
        onClick={handleMoveUp}
        disabled={!enableMoveUp}
      >
        &uarr;
      </button>
      <button
        className="btn btn-dark ml-1"
        type="button"
        title="Move down"
        onClick={handleMoveDown}
        disabled={!enableMoveDown}
      >
        &darr;
      </button>
      <button
        className="btn btn-danger ml-3"
        type="button"
        title="Remove this item"
        onClick={handleRemove}
        disabled={!enableRemove}
      >
        &times;
      </button>
    </div>
  );
};

export default StackItemButtons;
