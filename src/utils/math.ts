export function add(a: number, b: number): number {
  return a + b;
}

export function multiply<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a * b) as T;
  }
  if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  }
  throw new Error("Invalid types");
}