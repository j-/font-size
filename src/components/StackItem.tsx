import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useWindowFocus } from '../use-window-focus';
import { useSelector } from '../store/use-selector';
import { useInputValue } from '../use-input-value';
import { getFocusIndex, isIdNext, isIdRoot } from '../store';
import { updateFocus } from '../store/actions-focus';
import StackItemButtons from './StackItemButtons';
import Details from './Details';

export interface Props {
  id: string;
  index: number;
}

const StackItem: React.FC<Props> = ({ id, index }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const windowFocus = useWindowFocus();
  const dispatch = useDispatch();
  const focusIndex = useSelector(getFocusIndex);
  const isRoot = useSelector((state) => isIdRoot(state, id));
  const isNext = useSelector((state) => isIdNext(state, id));
  const [inputValue, setInputValue] = useInputValue(id);
  const inputId = 'item-' + id;
  const placeholder = (
    isRoot ? 'Root element font size' :
    isNext ? 'Next element font size' :
    'Element ' + index + ' font size'
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleFocus: React.FocusEventHandler = () => {
    dispatch(updateFocus(index));
  };
  React.useEffect(() => {
    if (
      // Must have element to focus on
      inputRef.current &&
      // Window must have focus
      windowFocus &&
      // Index must have changed
      index === focusIndex
    ) {
      inputRef.current.focus();
    }
  }, [inputRef, windowFocus, index, focusIndex]);
  return (
    <div className="StackItem list-group-item">
      <div className="d-flex flex-row">
        <div className="flex-fill">
          <input
            ref={inputRef}
            className="form-control"
            type="text"
            id={inputId}
            value={inputValue}
            placeholder={placeholder}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            autoFocus={focusIndex === index}
            onFocus={handleFocus}
            onChange={handleChange}
          />
        </div>
        {isRoot || isNext || <StackItemButtons index={index} />}
      </div>
      <div>
        <Details index={index} />
      </div>
    </div>
  );
};

export default StackItem;
