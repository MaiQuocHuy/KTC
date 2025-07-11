import { useState, useCallback } from "react";
import {
  getTasks,
  getTaskById,
  getTasksByAssignee,
  createTask,
  updateTask,
  deleteTask,
} from "../services";
import { ApiException } from "../services";
import type { Task, Filter } from "../types";
import { searchTasks } from "../utils";

interface UseTasksResult {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  fetchTasks: () => Promise<void>;
  fetchTasksByAssignee: (assigneeId: number) => Promise<void>;
  refreshTasks: () => Promise<void>;
}

interface UseTaskResult {
  task: Task | null;
  isLoading: boolean;
  error: string | null;
  fetchTask: (id: string | number) => Promise<void>;
}

interface UseTaskMutationsResult {
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  error: string | null;
  createTaskMutation: (task: Task) => Promise<Task>;
  updateTaskMutation: (task: Task) => Promise<Task>;
  deleteTaskMutation: (id: string | number) => Promise<void>;
  clearError: () => void;
}

// Hook for fetching multiple tasks
export const useTasks = (): UseTasksResult => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      const errorMessage =
        err instanceof ApiException ? err.message : "Failed to fetch tasks";
      setError(errorMessage);
      console.error("Error fetching tasks:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchTasksByAssignee = useCallback(async (assigneeId: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTasksByAssignee(assigneeId);
      setTasks(data);
    } catch (err) {
      const errorMessage =
        err instanceof ApiException
          ? err.message
          : "Failed to fetch tasks by assignee";
      setError(errorMessage);
      console.error("Error fetching tasks by assignee:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshTasks = useCallback(async () => {
    await fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    isLoading,
    error,
    fetchTasks,
    fetchTasksByAssignee,
    refreshTasks,
  };
};

// Hook for fetching a single task
export const useTask = (): UseTaskResult => {
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTask = useCallback(async (id: string | number) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTaskById(id);
      setTask(data);
    } catch (err) {
      const errorMessage =
        err instanceof ApiException ? err.message : "Failed to fetch task";
      setError(errorMessage);
      console.error("Error fetching task:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    task,
    isLoading,
    error,
    fetchTask,
  };
};

// Hook for task mutations (create, update, delete)
export const useTaskMutations = (): UseTaskMutationsResult => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTaskMutation = useCallback(async (task: Task): Promise<Task> => {
    try {
      setIsCreating(true);
      setError(null);
      const createdTask = await createTask(task);
      return createdTask;
    } catch (err) {
      const errorMessage =
        err instanceof ApiException ? err.message : "Failed to create task";
      setError(errorMessage);
      console.error("Error creating task:", err);
      throw err;
    } finally {
      setIsCreating(false);
    }
  }, []);

  const updateTaskMutation = useCallback(async (task: Task): Promise<Task> => {
    try {
      setIsUpdating(true);
      setError(null);
      const updatedTask = await updateTask(task);
      return updatedTask;
    } catch (err) {
      const errorMessage =
        err instanceof ApiException ? err.message : "Failed to update task";
      setError(errorMessage);
      console.error("Error updating task:", err);
      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, []);

  const deleteTaskMutation = useCallback(
    async (id: string | number): Promise<void> => {
      try {
        setIsDeleting(true);
        setError(null);
        await deleteTask(id);
      } catch (err) {
        const errorMessage =
          err instanceof ApiException ? err.message : "Failed to delete task";
        setError(errorMessage);
        console.error("Error deleting task:", err);
        throw err;
      } finally {
        setIsDeleting(false);
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isCreating,
    isUpdating,
    isDeleting,
    error,
    createTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
    clearError,
  };
};

// Hook for filtered tasks
export const useFilteredTasks = (tasks: Task[], filters: Filter) => {
  return searchTasks(tasks, filters);
};
