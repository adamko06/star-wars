export const currentFilterByMovie = (episode) => {
  return {
    type: 'CURRENTEPISODE',
    episode: episode,
  };
};
