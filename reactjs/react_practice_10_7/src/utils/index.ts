import type { Filter, Task } from "../types";

export const searchTasks = (tasks: Task[], filters: Filter): Task[] => {
  return tasks.filter((task) => {
    // Apply status filter
    if (filters.status && task.status !== filters.status) {
      return false;
    }

    // Apply priority filter
    if (filters.priority && task.priority !== filters.priority) {
      return false;
    }

    // Apply text search filter
    if (filters.searchText && filters.searchText.trim() !== "") {
      const searchText = filters.searchText.toLowerCase().trim();
      const titleMatch = task.title.toLowerCase().includes(searchText);
      const descriptionMatch =
        task.description?.toLowerCase().includes(searchText) || false;

      if (!titleMatch && !descriptionMatch) {
        return false;
      }
    }

    return true;
  });
};
