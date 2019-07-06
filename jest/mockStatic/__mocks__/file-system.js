export const mockWriteFile = jest.fn();
export const mockReadFile = jest.fn();

const mock = { writeFile: mockWriteFile, readFile: mockReadFile };

export default mock;