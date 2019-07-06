import SoundPlayer from './sound-player';

export default class MediaManager {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }

  getTimestamp() {
    return this.soundPlayer.getTimestamp();
  }
}
