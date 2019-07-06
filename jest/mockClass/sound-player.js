export default class SoundPlayer {
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName);
  }

  getTimestamp() {
    console.log('Getting timestamp');
    return '00:00';
  }
}