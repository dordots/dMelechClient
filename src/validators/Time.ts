import { Time } from "./../interfaces/Time";
import { Range } from "./../interfaces/Range";

export function Validate(time: Time): boolean {
  if (!time || typeof(time) !== 'object') return false;
  if (!time.hours || typeof(time.hours) !== 'number') return false;
  if (!time.minutes || typeof(time.minutes) !== 'number') return false;
  if (time.hours > 23 || time.hours < 0) return false;
  if (time.minutes > 59 || time.minutes < 0) return false;

  return true;
}

export function ValidateRange(range: Range<Time>): boolean {
    return (Validate(range["0"]) && Validate(range["1"]));
}
