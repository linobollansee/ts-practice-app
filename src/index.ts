import { createUser, getUsers, fetchUserFromApi } from "./services/userService";
import { add, multiply } from "./utils/math";
import { Role } from "./models/user";

console.log("=== TypeScript Practice App ===\n");

const user1 = createUser("Alice", "alice@example.com", Role.ADMIN);
const user2 = createUser("Bob", "bob@example.com");

console.log("Created Users:");
console.log(getUsers());

console.log("\nMath Examples:");
console.log("Add 5 + 10 =", add(5, 10));
console.log("Multiply 3 * 4 =", multiply(3, 4));
console.log("Multiply 'Hello' + 'World' =", multiply("Hello", "World"));

(async () => {
  console.log("\nFetching user from API...");
  const fetchedUser = await fetchUserFromApi(100);
  console.log("Fetched User:", fetchedUser);
})();