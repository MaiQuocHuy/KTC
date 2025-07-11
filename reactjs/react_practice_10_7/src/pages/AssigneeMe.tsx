import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TaskFilterForm, TaskList } from "../components";
import { useTasks, useFilteredTasks } from "../hooks";
import { APP_CONFIG } from "../constants";
import type { Filter } from "../types";

export default function AssigneeMe() {
  const navigate = useNavigate();
  const { tasks, isLoading, error, fetchTasksByAssignee } = useTasks();
  const [filters, setFilters] = useState<Filter>({});

  // Get filtered tasks using the custom hook
  const filteredTasks = useFilteredTasks(tasks, filters);

  useEffect(() => {
    fetchTasksByAssignee(APP_CONFIG.defaultAssigneeId);
  }, [fetchTasksByAssignee]);

  const handleEdit = (taskId: string | number | undefined) => {
    if (taskId) {
      navigate(`/update/${taskId}`);
    }
  };

  const handleSearch = (newFilters: Filter) => {
    setFilters(newFilters);
  };

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Error loading your tasks
          </h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => fetchTasksByAssignee(APP_CONFIG.defaultAssigneeId)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
            <p className="text-gray-600 mt-2">
              Manage and track your assigned tasks
            </p>
          </div>
        </div>
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mr-3"></div>
            <span className="text-gray-600">Loading your tasks...</span>
          </div>
        )}
      </div>

      {/* Filter Section */}
      <TaskFilterForm onSearch={handleSearch} />

      {/* Task List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <TaskList tasks={filteredTasks} onEdit={handleEdit} />
      </div>
    </div>
  );
}
