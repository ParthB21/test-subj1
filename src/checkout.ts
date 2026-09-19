import type { User } from "./types/user.js";

/** Payments assumes User.id is a number it can do arithmetic on. */
export function nextInvoiceId(u: User): number {
  return u.id + 1;
}

export function sortByUser(users: User[]): User[] {
  return [...users].sort((a, b) => a.id - b.id);
}
