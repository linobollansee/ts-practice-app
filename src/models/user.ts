// Define the structure of a User object in the application
export interface User {
  id: number;        // Unique identifier for the user
  name: string;      // Full name of the user
  email: string;     // Email address of the user
  role: Role;        // Role of the user, based on the Role enum defined below
}

// Enum representing the possible roles a user can have
export enum Role {
  ADMIN = "ADMIN",   // Admin users with full permissions
  USER = "USER",     // Regular users with standard permissions
  GUEST = "GUEST"    // Guest users with limited access
}
