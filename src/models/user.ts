export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}