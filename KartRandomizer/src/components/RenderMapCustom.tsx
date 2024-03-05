'use client';
import { data } from '../data';
import { useState } from 'react';

export default function RenderMapCustom() {
  const [tracks, setTracks] = useState<Tracks[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const renderTracks = () => {
    if (isFiltering && tracks.length < 1) {
      const shuffleTracks = data
        .sort(() => 0.5 - Math.random())
        .map((track, i) => {
          if (i <= 3) {
            return { ...track, i, isPlayed: true };
          } else {
            return { ...track };
          }
        });
      console.log(shuffleTracks);
      setTracks(shuffleTracks);
    } else if (isFiltering && tracks.length > 1) {
      const shuffleTracks = tracks
        .sort(() => 0.5 - Math.random())
        .map((track, i) => {
          if (i <= 3) {
            return { ...track, i, isPlayed: true };
          } else {
            return { ...track };
          }
        });
      const filteredTracks = shuffleTracks.filter((track) => !track.isPlayed);

      setTracks(filteredTracks);
    } else {
      const shuffleTracks = data.sort(() => 0.5 - Math.random());
      setTracks(shuffleTracks.slice(0, 4));
      console.log(tracks);
    }
  };

  const renderedTracks = tracks?.map((track, i) => {
    const { trackName, cup, id } = track;
    if (i <= 3) {
      return (
        <div key={id} className='flex justify-center'>
          <h1>Track {i + 1} --</h1>
          <h2 className='px-1 font-bold'>{trackName}</h2>
          <h3 className='text-sm pt-1 font-light'>{cup}</h3>
        </div>
      );
    }
  });

  const handleChange = () => {
    setTracks([]);
    setIsFiltering(!isFiltering);
  };
  const handleMapListReset = () => {
    setTracks([]);
  };

  return (
    <div>
      <div className='pb-4'>
        {tracks.length > 3 ? renderedTracks : 'Generate a Map Set'}
      </div>
      <div className=''>
        <button
          className='border-blue-600 border-2 px-2 py-1 rounded-md max-w-40 mt-16 mb-4 hover:scale-110'
          onClick={renderTracks}
        >
          Generate Maps
        </button>
        <button
          onClick={handleMapListReset}
          className='border-red-600 border-2 px-2 py-1 rounded-md max-w-40 mb-4 ml-4 mt-16 hover:scale-110'
        >
          Reset Map List
        </button>
        <div className='flex justify-center'>
          <label htmlFor='isFiltering'>
            <p className='mx-4'>Filter Previous maps</p>
            <input
              type='checkbox'
              onChange={handleChange}
              name='isFiltering'
              className='hover:scale-110'
              id='isFiltering'
            />
          </label>
          <label htmlFor='DLC'>
            <p className='mx-4'>Include DLC maps</p>
            <input
              type='checkbox'
              name='isDLC'
              id='DLC'
              className='
              hover:scale-110'
            />
          </label>
        </div>
      </div>
    </div>
  );
}
