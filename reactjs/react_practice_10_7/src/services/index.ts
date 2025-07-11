import type { Task, ApiError } from "../types";
import { API_CONFIG, getAuthHeaders } from "../constants";

// Custom error class for API errors
export class ApiException extends Error {
  public status: number;
  public errors?: Record<string, string[]>;

  constructor(
    message: string,
    status: number,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "ApiException";
    this.status = status;
    this.errors = errors;
  }
}

// Generic API client function
const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${API_CONFIG.baseUrl}${endpoint}`;
  const config: RequestInit = {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData: ApiError = await response.json().catch(() => ({
        message: `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      }));

      throw new ApiException(
        errorData.message || "An error occurred",
        response.status,
        errorData.errors
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiException) {
      throw error;
    }

    // Handle network errors or JSON parsing errors
    throw new ApiException(
      error instanceof Error ? error.message : "Network error occurred",
      0
    );
  }
};

/**
 * Authentication Services
 */

/**
 * Logs in a user with username and password
 * @param username - User's username
 * @param password - User's password
 * @returns Promise that resolves to user data with token
 * @throws ApiException if the request fails
 */
export const login = async (
  username: string,
  password: string
): Promise<any> => {
  return apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
};

/**
 * Task Services
 */

/**
 * Creates a new task
 * @param task - The task object to create
 * @returns Promise that resolves to the created task
 * @throws ApiException if the request fails
 */
export const createTask = async (task: Task): Promise<Task> => {
  return apiClient<Task>("/workspaces/tasks", {
    method: "POST",
    body: JSON.stringify(task),
  });
};

/**
 * Updates an existing task
 * @param task - The task object with updated data
 * @returns Promise that resolves to the updated task
 * @throws ApiException if the request fails
 */
export const updateTask = async (task: Task): Promise<Task> => {
  const { id, ...taskData } = task;
  return apiClient<Task>(`/workspaces/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(taskData),
  });
};

/**
 * Deletes a task by its ID
 * @param taskId - The ID of the task to delete
 * @returns Promise that resolves when the task is deleted
 * @throws ApiException if the request fails
 */
export const deleteTask = async (taskId: string | number): Promise<void> => {
  await apiClient<void>(`/workspaces/tasks/${taskId}`, {
    method: "DELETE",
  });
};

/**
 * Retrieves all tasks
 * @returns Promise that resolves to an array of tasks
 * @throws ApiException if the request fails
 */
export const getTasks = async (): Promise<Task[]> => {
  return apiClient<Task[]>("/workspaces/tasks");
};

/**
 * Retrieves a specific task by its ID
 * @param taskId - The ID of the task to retrieve
 * @returns Promise that resolves to the task object
 * @throws ApiException if the request fails
 */
export const getTaskById = async (taskId: string | number): Promise<Task> => {
  return apiClient<Task>(`/workspaces/tasks/${taskId}`);
};

/**
 * Retrieves tasks assigned to a specific user
 * @param assignee_id - The ID of the user to get tasks for
 * @returns Promise that resolves to an array of tasks assigned to the user
 * @throws ApiException if the request fails
 */
export const getTasksByAssignee = async (
  assignee_id: string | number
): Promise<Task[]> => {
  return apiClient<Task[]>(`/workspaces/tasks/assignee/${assignee_id}`);
};
