import React, { useState, useEffect } from 'react';
import TrackData from './trackDataInterface';

interface SelectFourValuesProps {
  data: TrackData[];
}

const SelectFourValues: React.FC<SelectFourValuesProps> = ({ data }) => {
  const [selectedValues, setSelectedValues] = useState<TrackData[]>([]);

  useEffect(() => {
    // Load saved state from local storage
    const savedValues = localStorage.getItem('selectedValues');
    if (savedValues) {
      setSelectedValues(JSON.parse(savedValues));
    }
  }, []);

  const handleSelectValues = () => {
    // Copy the original array to avoid mutating the state directly
    const dataArrayCopy: TrackData[] = [...data];

    // Shuffle the array to randomize the order
    dataArrayCopy.sort(() => Math.random() - 0.5);

    // Select the first four values
    const selectedValues: TrackData[] = dataArrayCopy.slice(0, 4);

    // Update the state with the selected values
    setSelectedValues(selectedValues);
    localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
  };

  return (
    <div>
      {selectedValues.length > 0 ? (
        <ul className='font-bold'>
          {selectedValues.map((value, index) => (
            <li className='flex justify-center' key={value.id}>
              <div className='text-cyan-500'>{value.cup} -</div>
              <div className='px-2'>{value.trackName}</div>
              <div className='font-thin'>--</div>
              <div className='px-2 text-cyan-900 font-normal'>
                {' '}
                Track {index + 1}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='my-12 text-cyan-700 font-semibold'>
          No results to display.
        </p>
      )}
      <button
        className='border-cyan-700 border-2 px-2 py-1 rounded-md text-slate-900 font-semibold max-w-48 mt-16 mb-4 hover:scale-110'
        onClick={handleSelectValues}
      >
        Select Four Tracks
      </button>
    </div>
  );
};

export default SelectFourValues;
