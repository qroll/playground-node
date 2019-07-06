import FileSystem from './file-system';

export default class WordDocument {
  static writeFile() {
    const fileName = 'file.txt';
    FileSystem.writeFile(fileName);
  }

  static readFile() {
    return FileSystem.readFile();
  }
}
