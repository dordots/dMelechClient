import { ICoordinates } from './../models/Coordinates';
import { Range } from "./../interfaces/Range";

export function Validate(coords: ICoordinates): boolean {
  if (!coords || typeof(coords) !== 'object') return false;
  if (!coords.lat || typeof(coords.lat) !== 'number') return false;
  if (!coords.lng || typeof(coords.lng) !== 'number') return false;
  if (coords.lat < 0 || coords.lng < 0) return false;

  return true;
}

export function ValidateRange(range: Range<ICoordinates>): boolean {
    return (range && Validate(range["0"]) && Validate(range["1"]));
}
