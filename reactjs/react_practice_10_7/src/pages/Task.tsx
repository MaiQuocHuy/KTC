import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TaskFilterForm, TaskList } from "../components";
import { useTasks, useFilteredTasks } from "../hooks";
import type { Filter } from "../types";

export default function Tasks() {
  const navigate = useNavigate();
  const { tasks, isLoading, error, fetchTasks } = useTasks();
  const [filters, setFilters] = useState<Filter>({});

  // Get filtered tasks using the custom hook
  const filteredTasks = useFilteredTasks(tasks, filters);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSearch = (newFilters: Filter) => {
    setFilters(newFilters);
  };

  const handleEdit = (taskId: string | number | undefined) => {
    if (taskId) {
      navigate(`/update/${taskId}`);
    }
  };

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Error loading tasks</p>
          <p>{error}</p>
        </div>
        <button
          onClick={() => fetchTasks()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Filter Section */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <TaskFilterForm onSearch={handleSearch} />
      </section>

      <div className="my-4" />

      {/* Task List Section */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <section className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">All Tasks</h2>
              <p className="text-gray-600 mt-1">
                Manage and track all tasks ({filteredTasks.length} of{" "}
                {tasks.length})
              </p>
            </div>
            {isLoading && (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
          </div>
        </section>

        <section>
          <TaskList tasks={filteredTasks} onEdit={handleEdit} />
        </section>
      </section>
    </div>
  );
}
