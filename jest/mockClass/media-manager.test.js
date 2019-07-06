import SoundPlayer, { mockPlaySoundFile, mockGetTimestamp } from './sound-player';
import MediaManager from './media-manager';
jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

describe('', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    SoundPlayer.mockClear();
    mockPlaySoundFile.mockClear();
    mockGetTimestamp.mockClear();
  });

  it('should call the class constructor of SoundPlayer', () => {
    const mediaManager = new MediaManager();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  it('should call a method on the class instance', () => {
    const mediaManager = new MediaManager();
    const coolSoundFileName = 'song.mp3';
    mediaManager.playSomethingCool();
    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  });

  it('should receive a mocked implementation of a method', () => {
    const mediaManager = new MediaManager();
    mockGetTimestamp.mockImplementation(() => '1:23');
    const result = mediaManager.getTimestamp();
    expect(result).toEqual('1:23');
  });
});