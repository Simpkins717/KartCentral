export const renderTracks = (tracks, isFiltering) => {
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
