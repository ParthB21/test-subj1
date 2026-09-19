export interface User {
  id: number;
  email: string;
}

export function makeUser(id: number, email: string): User {
  return { id, email };
}
