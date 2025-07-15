"use client";

import { useState, useEffect } from "react";
import { Task, TaskCreateRequest } from "@/types/task";
import { taskApiClient } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Link from "next/link";

// Client-Side Rendering
export default function TaskCSRPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    // description: "",
    assigneeId: 1,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskApiClient.getTasks(1, 20);
      console.log("Fetched Tasks:", response);
      setTasks(response.tasks);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setCreating(true);
      for (let i = 1; i <= 3; i++) {
        const taskData: TaskCreateRequest = {
          title: `Len phim ${i}`,
          assignee_id: formData.assigneeId,
          status: "to_do",
          start_date: "2025-07-10 08:30:00",
          due_date: "2025-07-12 17:00:00",
        };

        await taskApiClient.createTask(taskData);
      }

      setFormData({ title: "", assigneeId: 1 });
      setShowCreateForm(false);
      await fetchTasks(); // Refresh the list
    } catch (err) {
      setError("Failed to create task");
    } finally {
      setCreating(false);
    }
  };

  const handleStatusUpdate = async (
    taskId: number,
    newStatus: Task["status"]
  ) => {
    try {
      await taskApiClient.updateTask(taskId, { status: newStatus });
      await fetchTasks(); // Refresh the list
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      tasks.forEach(async (task) => {
        // setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
        await taskApiClient.deleteTask(task.id);
      });
      await fetchTasks(); // Refresh the list
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "to_do":
        return "bg-yellow-100 text-yellow-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <Navigation />
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading tasks...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Navigation />

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Client-Side Rendering (CSR)
          </h1>
          <p className="text-gray-600">
            This page is rendered on the client. Interactive features like
            creating, updating, and deleting tasks.
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button
              onClick={() => setError(null)}
              className="float-right font-bold text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                CSR
              </span>
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {showCreateForm ? "Cancel" : "Create Task"}
              </button>
            </div>
          </div>

          {showCreateForm && (
            <form
              onSubmit={handleCreateTask}
              className="mb-6 p-4 border rounded-lg bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assignee ID
                  </label>
                  <input
                    type="number"
                    value={formData.assigneeId}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        assigneeId: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:opacity-50"
                >
                  {creating ? "Creating..." : "Create Task"}
                </button>
              </div>
            </form>
          )}

          {tasks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No tasks found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {task.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status.replace("_", " ")}
                      </span>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                      <Link
                        href={`/task-isr/${task.id}`}
                        className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* <p className="text-gray-600 mb-3">{task.description}</p> */}

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <div>
                      <span className="font-medium">Assignee:</span>{" "}
                      {task.assignee?.username || "Unknown"}
                    </div>
                    <div>
                      <span className="font-medium">Created:</span>{" "}
                      {new Date(task.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStatusUpdate(task.id, "to_do")}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        task.status === "to_do"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      }`}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(task.id, "in_progress")}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        task.status === "in_progress"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(task.id, "completed")}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        task.status === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
