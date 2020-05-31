import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIdsAndNext, canMoveFocusUp, canMoveFocusDown } from '../store';
import { moveFocusUp, moveFocusDown } from '../store/actions-focus';
import StackItem from './StackItem';

const Stack: React.FC = () => {
  const dispatch = useDispatch();
  const ids = useSelector(getAllIdsAndNext);
  const canMoveUp = useSelector(canMoveFocusUp);
  const canMoveDown = useSelector(canMoveFocusDown);
  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if ((e.target as HTMLOListElement).tagName !== 'INPUT') {
      return;
    }
    switch (e.key) {
      case 'ArrowUp':
        if (!canMoveUp) break;
        e.preventDefault();
        dispatch(moveFocusUp());
        break;
      case 'ArrowDown':
      case 'Enter':
        if (!canMoveDown) break;
        e.preventDefault();
        dispatch(moveFocusDown());
        break;
      default:
    }
  };
  return (
    <ol className="Stack list-group list-group-flush" onKeyDown={handleKeyDown}>
      {
        ids.map((id, i) => (
          <li key={id}>
            <StackItem id={id} index={i} />
          </li>
        ))
      }
    </ol>
  );
};

export default Stack;
