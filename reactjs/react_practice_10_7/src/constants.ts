// API Configuration
export const API_CONFIG = {
  baseUrl: "https://server.aptech.io",
  timeout: 5000,
  defaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
} as const;

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
} as const;

// Default fallback token (for development/testing)
export const DEFAULT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDkxMjkyLCJleHAiOjE3ODM2NDg4OTJ9.doBBWgZoVTfG5OlE--3ARLGDHYO73XrC0A7VeZIG1pk";

// Utility function to get auth headers
export const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || DEFAULT_TOKEN;
  return {
    ...API_CONFIG.defaultHeaders,
    Authorization: `Bearer ${token}`,
  };
};

// Application constants
export const APP_CONFIG = {
  name: "Tasks Management",
  defaultAssigneeId: 1,
} as const;
