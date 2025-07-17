"use client";

import { create } from "zustand";
import axios from "axios";

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  isActive: boolean;
  roles: Role[];
}

interface LoginResponse {
  loggedInUser: User;
  access_token: string;
  refresh_token: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
  hasRole: (roleName: string) => boolean;
  initializeAuth: () => void;
}

// Tạo axios instance cho API
const apiClient = axios.create({
  baseURL: "https://server.aptech.io",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  token: null,

  login: async (username: string, password: string) => {
    set({ loading: true });
    try {
      console.log("Attempting login with:", username, password);
      const response = await apiClient.post<LoginResponse>("/auth/login", {
        username,
        password,
      });

      const { loggedInUser, access_token, refresh_token } = response.data;

      // Lưu tokens vào localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // Cập nhật axios default headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

      set({
        user: loggedInUser,
        token: access_token,
        isLoggedIn: true,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      console.error("Login error:", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    set({
      user: null,
      token: null,
      isLoggedIn: false,
    });
  },

  checkAuth: () => {
    const token = localStorage.getItem("access_token");
    const userString = localStorage.getItem("user");

    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        set({
          user,
          token,
          isLoggedIn: true,
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
        // Clear invalid data
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
      }
    }
  },

  hasRole: (roleName: string) => {
    const { user } = get();
    return user?.roles?.some((role) => role.name === roleName) || false;
  },

  initializeAuth: () => {
    const { checkAuth } = get();
    checkAuth();
  },
}));
