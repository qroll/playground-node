export const mockPlaySoundFile = jest.fn();
export const mockGetTimestamp = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { playSoundFile: mockPlaySoundFile, getTimestamp: mockGetTimestamp };
});

export default mock;