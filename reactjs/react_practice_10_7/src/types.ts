// Task related types
export interface Task {
  id?: string | number;
  title: string;
  description?: string;
  start_date: Date;
  due_date?: Date;
  status: TaskStatus;
  completed_date?: Date;
  priority: TaskPriority;
  assignee_id?: number;
  created_by?: number;
  created_time: Date;
  updated_by?: number;
  updated_time: Date;
}

export type TaskStatus = "to_do" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Filter {
  status?: string;
  priority?: string;
}

// User and Authentication types
export interface User {
  id: number;
  username: string;
  email: string;
  roles?: Role[];
}

export interface Role {
  id: number;
  name: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Form types
export interface TaskFormData {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee_id?: string | number;
}

// Navigation types
export interface NavItem {
  path: string;
  label: string;
  exact: boolean;
}

// Component Props types
export interface TaskListProps {
  tasks: Task[];
  onEdit?: (taskId: string | number | undefined) => void;
}

export interface TaskFilterFormProps {
  onSearch: (filters: Filter) => void;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
}
