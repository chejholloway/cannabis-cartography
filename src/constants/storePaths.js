export const geoPaths = {
  locating: () => ['locating'],
  location: () => ['location'],
  error: () => ['error'],
};

export const listingsPaths = {
  fetching: () => ['fetching'],
  location: () => ['location'],
  regions: () => ['regions'],
  details: listingId => ['details', listingId],
  error: () => ['error'],
};
