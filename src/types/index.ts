export type AuthModes = "Login" | "Register";
export interface User {
  name: string;
  image: string;
  email: string;
}
export interface Message {
  senderId: string;
  content: string;
  timestamp: string;
}
