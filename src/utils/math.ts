/**
 * Adds two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Multiplies two numbers or concatenates two strings.
 * Uses a generic type T to support either number or string.
 * 
 * @template T - Can be a number or a string
 * @param a - First operand (number or string)
 * @param b - Second operand (number or string)
 * @returns The product if numbers, or concatenated string if strings
 * @throws Error if types of a and b are mismatched or unsupported
 */
export function multiply<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a * b) as T; // Multiply numbers
  }
  if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T; // Concatenate strings
  }
  throw new Error("Invalid types"); // Throw error for mismatched or unsupported types
}
