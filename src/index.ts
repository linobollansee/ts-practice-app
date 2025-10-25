import { createUser, getUsers, fetchUserFromApi } from "./services/userService";
import { add, multiply } from "./utils/math";
import { Role } from "./models/user";

// Entry point of the TypeScript Practice App
console.log("=== TypeScript Practice App ===\n");

// Create two users
const user1 = createUser("Alice", "alice@example.com", Role.ADMIN); // Admin user
const user2 = createUser("Bob", "bob@example.com");                 // Default role (USER)

// Display the list of created users
console.log("Created Users:");
console.log(getUsers());

// Demonstrate basic math utility functions
console.log("\nMath Examples:");
console.log("Add 5 + 10 =", add(5, 10));                           // Output: 15
console.log("Multiply 3 * 4 =", multiply(3, 4));                   // Output: 12 (numbers)
console.log("Multiply 'Hello' + 'World' =", multiply("Hello", "World")); // Output: HelloWorld (strings)

// Demonstrate asynchronous API call simulation
(async () => {
  console.log("\nFetching user from API...");
  const fetchedUser = await fetchUserFromApi(100);                 // Fetch mock user with ID 100
  console.log("Fetched User:", fetchedUser);                       // Display fetched user
})();
