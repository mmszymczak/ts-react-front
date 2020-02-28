export default function myFlattenArray(arrayToFlat) {
  if (!Array.isArray(arrayToFlat)) {
    console.error('Data provided is of wrong type');
    return;
  }
  let newArray = [];

  arrayToFlat.forEach(function (element) {
    if (Array.isArray(element)) {
      newArray = [...newArray, ...myFlattenArray(element)];
    } else {
      if (!Number.isInteger(element)) {
        throw new Error(`Provided value ${element} is not of type integer`);
      }
      newArray.push(element);
    }
  });

  return newArray;
}
