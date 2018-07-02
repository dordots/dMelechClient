import { DaysOfWeek } from './../interfaces/DaysOfWeek';
import { Range } from "./../interfaces/Range";

export function Validate(day: DaysOfWeek): boolean {
  if (!day || typeof(day) !== 'number') return false;
  if (day < 0 || day > 7) return false;

  return true;
}

export function ValidateRange(range: Range<DaysOfWeek>): boolean {
    return (range && Validate(range["0"]) && Validate(range["1"]));
}

export function ValidateArray(array: Array<DaysOfWeek>): boolean {
  return (array && array.filter && array.filter(Validate).length == array.length);
}