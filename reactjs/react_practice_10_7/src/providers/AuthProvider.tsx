import React, { useState, useEffect, useCallback } from "react";
import { AuthContext } from "../context";
import { login as loginService } from "../services";
import { STORAGE_KEYS } from "../constants";
import type { User, LoginCredentials, AuthContextType } from "../types";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

        if (storedUser && token) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error initializing auth state:", error);
        // Clear corrupted data
        localStorage.removeItem(STORAGE_KEYS.USER_DATA);
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await loginService(
          credentials.username,
          credentials.password
        );

        // Assuming the API returns user data and token
        const userData: User = {
          id: response.id || response.user?.id,
          username: response.username || response.user?.username,
          email: response.email || response.user?.email,
          roles: response.roles || response.user?.roles || [],
        };

        // Store user data and token
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
        if (response.token) {
          localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.token);
        }

        setUser(userData);
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  }, []);

  const authContextValue: AuthContextType = {
    user,
    setUser,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
