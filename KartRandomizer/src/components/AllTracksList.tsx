import React from 'react';
import TrackData from '../utils/trackDataInterface';

interface AllTracksListProps {
  tracks: TrackData[];
  remainingValues: TrackData[];
}

const AllTracksList: React.FC<AllTracksListProps> = ({
  tracks,
  remainingValues,
}) => {
  return (
    <div className='my-6 md:p-4 md:border-0 border-2 border-cyan-700 rounded-md'>
      <h3 className='font-semibold text-xl'>All Tracks:</h3>
      <div className='border-b-2 border-black max-w-24 mb-4 mx-auto'></div>
      <ul className='max-w-2xl flex flex-col md:max-h-144 flex-wrap'>
        {tracks.map((track: TrackData, index: number) => (
          <li
            className='pr-4 text-rose-400'
            key={index}
            style={{
              textDecoration: remainingValues.includes(track)
                ? 'none'
                : 'line-through',
              fontWeight: remainingValues.includes(track)
                ? 'normal'
                : 'lighter',
              opacity: remainingValues.includes(track) ? 1 : 0.5,
            }}
          >
            {track.trackName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTracksList;
