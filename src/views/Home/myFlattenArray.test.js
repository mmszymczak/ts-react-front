import myFlattenArray from './myFlattenArray';


describe('myFlattenArray test spec', () => {
  it('can flatten single level array of integers', () => {
      const testArray = [1, 2 ,3];

      const result = myFlattenArray(testArray);

      const expectedResult = [1, 2, 3];

      expect(result).toEqual(expectedResult);
      expect(result).toHaveLength(3);
  });

  it('can flatten two dimensional array of integers', () => {
      const testArray = [1, 2, [3, 4]];

      const result = myFlattenArray(testArray);

      const expectedResult = [1, 2, 3, 4];

      expect(result).toEqual(expectedResult);
      expect(result).toHaveLength(4);
  });

  it('can flatten three dimensional array of integers', () => {
    const testArray = [[1, 2], 3, [4, [5, 6]]];

    const result = myFlattenArray(testArray);

    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(6);
  });

  it('can flatten example from theorem', () => {
    const testArray = [[1,2,[3]],4];

    const result = myFlattenArray(testArray);

    const expectedResult = [1, 2, 3, 4];

    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(4);
  });

  it('throws an error if provided data is not an array', () => {
    const testData = {a: 1, b:2, c:[3, 4]};
    global.console = {error: jest.fn()};

    const result = myFlattenArray(testData);

    expect(console.error).toBeCalled();
    expect(console.error).toBeCalledWith('Data provided is of wrong type');
    expect(result).toBeUndefined();
  });

  it('throws an error if element of an array is not integer', () => {
    const testArray = [1, 2, [3, '4']];

    expect(() => myFlattenArray(testArray)).toThrowError('Provided value 4 is not of type integer');
  });
});
