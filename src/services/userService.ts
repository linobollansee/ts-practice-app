import { User, Role } from "../models/user";

// In-memory storage for users
let users: User[] = [];

/**
 * Creates a new user and adds it to the in-memory list.
 * @param name - Full name of the user
 * @param email - Email address of the user
 * @param role - Role of the user (default is Role.USER)
 * @returns The newly created User object
 */
export function createUser(name: string, email: string, role: Role = Role.USER): User {
  const user: User = {
    id: users.length + 1, // Simple auto-increment ID based on current array length
    name,
    email,
    role,
  };
  users.push(user); // Add the new user to the in-memory list
  return user;      // Return the created user
}

/**
 * Returns all users stored in memory.
 * @returns Array of User objects
 */
export function getUsers(): User[] {
  return users;
}

/**
 * Simulates fetching a user from an external API.
 * Returns a Promise that resolves after 1 second with a mock user.
 * @param id - The ID of the user to fetch
 * @returns Promise resolving to a User object
 */
export async function fetchUserFromApi(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User${id}`,                  // Mock name based on ID
        email: `user${id}@example.com`,     // Mock email based on ID
        role: Role.GUEST                    // Default role for API-fetched users
      });
    }, 1000); // Simulate 1-second API delay
  });
}
