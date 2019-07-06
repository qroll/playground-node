import FileSystem, { mockReadFile, mockWriteFile } from './file-system';
import WordDoc from './word-doc';
jest.mock('./file-system');

describe('', () => {
  beforeEach(() => {
    // Clear all instances and calls to all methods:
    mockReadFile.mockClear();
    mockWriteFile.mockClear();
  });

  it('should call a method on the class instance', () => {
    const fileName = 'file.txt';
    WordDoc.writeFile();
    expect(mockWriteFile).toHaveBeenCalledWith(fileName);
  });

  it('should receive a mocked implementation of a method', () => {
    mockReadFile.mockImplementation(() => 'not interesting stuff');
    const result = WordDoc.readFile();
    expect(result).toEqual('not interesting stuff');
  });
});