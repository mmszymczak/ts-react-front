/**
 * Thus function removes keys from object that values are empty string or undefined.
 * @param  {any} <ObjectType = any>
 * @returns {any} <ObjectType>
 */
export const removeEmpty = <ObjectType extends { [key: string]: any }>(obj: ObjectType) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
    else if (obj[key] === undefined || obj[key] === '') delete obj[key];
  });
  return obj;
};
