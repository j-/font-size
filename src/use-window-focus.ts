import React from 'react';

export const useWindowFocus = () => {
  const [hasFocus, setHasFocus] = React.useState(document.hasFocus());

  React.useEffect(() => {
    const handleFocus = () => setHasFocus(true);
    const handleBlur = () => setHasFocus(false);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  });

  return hasFocus;
};
