import { useState } from 'react';

const useInput = value => {
  const [value, setValue] = useState(value);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
