import { Range } from "./../interfaces/Range";

export function Validate(radius: number): boolean {
    if (!radius || typeof(radius) !== 'number') return false;
    if (radius < 1 || radius > 25) return false;
  
    return true;
  }
  
  export function ValidateRange(range: Range<number>): boolean {
      return (range && Validate(range["0"]) && Validate(range["1"]));
  }