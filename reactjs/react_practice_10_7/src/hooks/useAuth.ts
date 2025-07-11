import { useAuth as useAuthContext } from "../context";
import type { LoginCredentials } from "../types";

// Re-export the auth hook for easier access
export const useAuth = () => {
  const auth = useAuthContext();

  const loginWithCredentials = async (credentials: LoginCredentials) => {
    try {
      await auth.login(credentials);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return {
    ...auth,
    loginWithCredentials,
  };
};
