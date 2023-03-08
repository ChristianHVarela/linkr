import React from 'react';

function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? stickyValue
        : defaultValue;
    });
    return [value, setValue];
  }

export default useStickyState;