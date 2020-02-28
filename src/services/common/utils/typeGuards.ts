/**
 * This is example type guard.
 * @param  {any} value
 * @returns boolean
 *
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}
