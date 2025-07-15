import { API_CONFIG, getAuthHeaders } from "@/constants";
import {
  Task,
  TaskCreateRequest,
  TaskUpdateRequest,
  TasksResponse,
  ApiResponse,
} from "@/types/task";

const API_BASE_URL = API_CONFIG.baseUrl;

// Fetch all tasks
export async function fetchTasks(
  page: number = 1,
  limit: number = 10
): Promise<TasksResponse> {
  const response = await fetch(`${API_BASE_URL}/workspaces/tasks`, {
    headers: getAuthHeaders(),
    next: { revalidate: 0 }, // For SSR - no caching
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  if (!data.tasks) {
    data.tasks = data; // Ensure tasks is always present
  }
  return data;
}

// Fetch all tasks with caching for SSG
export async function fetchTasksSSG(): Promise<TasksResponse> {
  const response = await fetch(`${API_BASE_URL}/workspaces/tasks`, {
    headers: getAuthHeaders(),
    next: { revalidate: 60 }, // Cache for 60 seconds for SSG
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  // Transform to match expected structure
  if (!data.tasks) {
    data.tasks = data; // Ensure tasks is always present
  }
  return data;
}

// Fetch single task by ID
export async function fetchTaskById(id: number): Promise<Task> {
  try {
    console.log("Fetching task with ID:", id);
    console.log("API Base URL:", API_BASE_URL, "/workspaces/tasks/", id);
    const response = await fetch(`${API_BASE_URL}/workspaces/tasks/${id}`, {
      headers: getAuthHeaders(),
      next: { revalidate: 30 }, // Cache for 30 seconds for ISR
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
}

// Create new task
export async function createTask(
  task: TaskCreateRequest
): Promise<ApiResponse<Task>> {
  const response = await fetch(`${API_BASE_URL}/workspaces/tasks`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

// Update task
export async function updateTask(
  id: number,
  updates: TaskUpdateRequest
): Promise<ApiResponse<Task>> {
  const response = await fetch(`${API_BASE_URL}/workspaces/tasks/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
}

// Delete task
export async function deleteTask(id: number): Promise<ApiResponse<any>> {
  const response = await fetch(`${API_BASE_URL}/workspaces/tasks/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  return response.json();
}

// Client-side API functions (for CSR)
export const taskApiClient = {
  async getTasks(page: number = 1, limit: number = 10): Promise<TasksResponse> {
    const response = await fetch(`/api/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return response.json();
  },

  async getTaskById(id: number): Promise<Task> {
    const response = await fetch(`/api/tasks/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch task");
    }
    const data = await response.json();
    return data.data;
  },

  async createTask(task: TaskCreateRequest): Promise<ApiResponse<Task>> {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    return response.json();
  },

  async updateTask(
    id: number,
    updates: TaskUpdateRequest
  ): Promise<ApiResponse<Task>> {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    return response.json();
  },

  async deleteTask(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    return response.json();
  },
};
