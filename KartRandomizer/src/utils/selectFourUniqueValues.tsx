import React, { useState } from 'react';
import TrackData from './trackDataInterface';
import AllTracksList from '../components/AllTracksList';
import fisherYatesShuffle from './fisherYatesShuffle';

interface SelectFourUniqueValuesProps {
  data: TrackData[];
}

const SelectFourUniqueValues: React.FC<SelectFourUniqueValuesProps> = ({
  data,
}) => {
  const [selectedValues, setSelectedValues] = useState<TrackData[]>([]);
  const [remainingValues, setRemainingValues] = useState<TrackData[]>([
    ...data,
  ]);

  const handleSelectUniqueValues = () => {
    if (remainingValues.length < 4) {
      setRemainingValues([...data]);
      setSelectedValues([]);
    } else {
      const remainingValuesCopy: TrackData[] = [...remainingValues];
      const shuffledArray = fisherYatesShuffle(remainingValuesCopy);
      const selectedValues: TrackData[] = shuffledArray.slice(0, 4);

      setSelectedValues(selectedValues);
      setRemainingValues(shuffledArray.slice(4));
    }
  };

  const handleResetValues = () => {
    setRemainingValues([...data]);
    setSelectedValues([]);
  };

  return (
    <div className='md:flex justify-around items-center'>
      <div className='text-cyan-700 font-bold md:-mt-24'>
        {selectedValues.length > 0 ? (
          <ul>
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
          <p className='text-cyan-700 text-zinc-200xl font-semibold'>
            No results to display.
          </p>
        )}
        <div className='md:ml-10 items-center flex flex-col md:flex-row'>
          <button
            className='border-cyan-700 font-semibold text-slate-800 border-2 px-2 py-1 rounded-md max-w-64 md:mt-16 mb-4 hover:scale-11 mt-12 hover:scale-110'
            onClick={handleSelectUniqueValues}
          >
            Select Four Unique Tracks
          </button>
          <button
            className='border-2 border-rose-400 px-2 py-1 rounded-sm text-slate-800 md:max-w-40 max-w-32 mx-auto mb-4 md:mx-4 md:mt-16 hover:scale-110 font-semibold'
            onClick={handleResetValues}
          >
            Reset Track List
          </button>
        </div>
      </div>
      <AllTracksList tracks={data} remainingValues={remainingValues} />
    </div>
  );
};

export default SelectFourUniqueValues;
