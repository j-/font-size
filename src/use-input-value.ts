import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from './use-debounce';
import { useSelector } from './store/use-selector';
import { updateValue } from './store/actions-value';
import { getValueById } from './store';

export const useInputValue = (id: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const dispatch = useDispatch();
  const storeValue = useSelector((state) => getValueById(state, id));
  const [inputValue, setInputValue] = React.useState(storeValue || '');
  const debouncedValue = useDebounce(inputValue, 250, true);

  React.useEffect(() => {
    if (debouncedValue && storeValue !== debouncedValue) {
      dispatch(updateValue(id, debouncedValue));
    }
  }, [dispatch, id, storeValue, debouncedValue]);

  React.useEffect(() => {
    setInputValue(storeValue);
  }, [storeValue]);
  
  return [inputValue, setInputValue];
};
