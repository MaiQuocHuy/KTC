export interface Task {
  id: number;
  title: string;
  status: "to_do" | "in_progress" | "completed";
  assignee_id: number;
  createdAt: string;
  updatedAt: string;
  assignee?: {
    id: number;
    username: string;
    email: string;
  };
}

export interface TaskCreateRequest {
  title: string;
  assignee_id: number;
  status?: "to_do" | "in_progress" | "completed";
  start_date?: string;
  due_date?: string;
}

export interface TaskUpdateRequest {
  title?: string;
  status?: "to_do" | "in_progress" | "completed";
  assignee_id?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface TasksResponse {
  tasks: Task[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
