import React, { useState } from 'react';
import SelectFourUniqueValues from './selectFourUniqueValues';
import SelectFourValues from './selectFourValues';
import { data } from '../data';

const ToggleableSelectComponent: React.FC = () => {
  const [useUniqueValues, setUseUniqueValues] = useState(true);

  const handleCheckboxChange = () => {
    setUseUniqueValues((prevValue) => !prevValue);
  };

  return (
    <div className=''>
      {useUniqueValues ? (
        <SelectFourUniqueValues data={data} />
      ) : (
        <SelectFourValues data={data} />
      )}
      <label className=''>
        Use Unique Tracks:
        <input
          type='checkbox'
          checked={useUniqueValues}
          onChange={handleCheckboxChange}
          className='hover:scale-110 mx-4'
        />
      </label>
    </div>
  );
};

export default ToggleableSelectComponent;
