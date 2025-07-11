import { createContext, useContext } from "react";
import type { AuthContextType } from "./types";

// Create AuthContext with proper typing
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Custom hook to use AuthContext with error handling
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Legacy export for backward compatibility during refactoring
export const LoginContext = AuthContext;
