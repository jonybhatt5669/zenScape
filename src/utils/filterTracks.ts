export const trackTitleFilter = (search: string) => (track: any) => {
  return track.title.toLowerCase().includes(search.toLowerCase());
};
