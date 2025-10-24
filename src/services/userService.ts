import { User, Role } from "../models/user";

let users: User[] = [];

export function createUser(name: string, email: string, role: Role = Role.USER): User {
  const user: User = {
    id: users.length + 1,
    name,
    email,
    role,
  };
  users.push(user);
  return user;
}

export function getUsers(): User[] {
  return users;
}

export async function fetchUserFromApi(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User${id}`,
        email: `user${id}@example.com`,
        role: Role.GUEST
      });
    }, 1000);
  });
}