export default class FileSystem {
  static writeFile(fileName) {
    console.log('Writing file ' + fileName);
  }

  static readFile() {
    console.log('Reading file');
    return 'interesting stuff';
  }
}