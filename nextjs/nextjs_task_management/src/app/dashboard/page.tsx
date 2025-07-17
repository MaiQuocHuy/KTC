"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import apiClient from "@/lib/axiosClient";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  dueDate: string;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
    dueDate: "",
  });

  const router = useRouter();
  const { user, isLoggedIn, logout, hasRole, initializeAuth } = useAuthStore();

  // Khởi tạo auth state
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // Kiểm tra xác thực
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
  }, [isLoggedIn, router]);

  // Kiểm tra quyền Administrator hoặc Managers
  const isAdmin = hasRole("Administrators") || hasRole("Managers");

  // Fetch tasks from API
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchTasks = async () => {
      try {
        const response = await apiClient.get("/tasks");
        if (response.data.success) {
          setTasks(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        // Fallback to fetch API for demo
        try {
          const response = await fetch("/api/tasks");
          const result = await response.json();
          if (result.success) {
            setTasks(result.data);
          }
        } catch (fallbackError) {
          console.error("Fallback fetch also failed:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [isLoggedIn]);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("Bạn không có quyền thêm task!");
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const result = await response.json();

      if (result.success) {
        setTasks([...tasks, result.data]);
        setNewTask({
          title: "",
          description: "",
          priority: "medium",
          dueDate: "",
        });
        setShowAddForm(false);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleEditTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAdmin || !editingTask) {
      alert("Bạn không có quyền sửa task!");
      return;
    }

    try {
      const response = await fetch(`/api/tasks/${editingTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTask.title,
          description: newTask.description,
          priority: newTask.priority,
          dueDate: newTask.dueDate,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setTasks(
          tasks.map((task) => (task.id === editingTask.id ? result.data : task))
        );
        setEditingTask(null);
        setNewTask({
          title: "",
          description: "",
          priority: "medium",
          dueDate: "",
        });
        setShowAddForm(false);
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const updateTaskStatus = async (id: number, status: Task["status"]) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (result.success) {
        setTasks(
          tasks.map((task) => (task.id === id ? { ...task, status } : task))
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    if (!isAdmin) {
      alert("Bạn không có quyền xóa task!");
      return;
    }

    if (!confirm("Bạn có chắc chắn muốn xóa task này?")) {
      return;
    }

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        setTasks(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const startEditTask = (task: Task) => {
    if (!isAdmin) {
      alert("Bạn không có quyền sửa task!");
      return;
    }

    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
    });
    setShowAddForm(true);
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
    setShowAddForm(false);
  };

  const handleLogout = () => {
    // Remove cookie
    document.cookie =
      "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    logout();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Hoàn thành";
      case "in-progress":
        return "Đang thực hiện";
      case "pending":
        return "Chờ xử lý";
      default:
        return "Không xác định";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header với thông tin user */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Task Manager
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-gray-500">Xin chào, </span>
                <span className="font-medium text-gray-900">
                  {user?.email?.split("@")[0]}
                </span>
                {isAdmin && (
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {user?.roles?.map((role) => role.name).join(", ")}
                  </span>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-600">
                Quản lý công việc và dự án của bạn
              </p>
            </div>
            {isAdmin && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                + Thêm Task Mới
              </button>
            )}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Tổng Tasks
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tasks.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Đang thực hiện
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {
                      tasks.filter((task) => task.status === "in-progress")
                        .length
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Hoàn thành
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tasks.filter((task) => task.status === "completed").length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Danh sách Tasks
              </h3>
            </div>

            <div className="divide-y divide-gray-200">
              {tasks.length === 0 ? (
                <div className="px-6 py-8 text-center">
                  <p className="text-gray-500">Chưa có task nào được tạo.</p>
                  {isAdmin && (
                    <button
                      onClick={() => setShowAddForm(true)}
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      Tạo task đầu tiên
                    </button>
                  )}
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className="px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900">
                          {task.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{task.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(
                              task.priority
                            )}`}
                          >
                            {task.priority === "high"
                              ? "Cao"
                              : task.priority === "medium"
                              ? "Trung bình"
                              : "Thấp"}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                              task.status
                            )}`}
                          >
                            {getStatusText(task.status)}
                          </span>
                          <span className="text-xs text-gray-500">
                            Hạn:{" "}
                            {task.dueDate
                              ? new Date(task.dueDate).toLocaleDateString(
                                  "vi-VN"
                                )
                              : "Chưa có"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <select
                          value={task.status}
                          onChange={(e) =>
                            updateTaskStatus(
                              task.id,
                              e.target.value as Task["status"]
                            )
                          }
                          className="text-sm border border-gray-300 rounded-md px-2 py-1"
                        >
                          <option value="pending">Chờ xử lý</option>
                          <option value="in-progress">Đang thực hiện</option>
                          <option value="completed">Hoàn thành</option>
                        </select>

                        {isAdmin && (
                          <button
                            onClick={() => startEditTask(task)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="Chỉnh sửa task"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        )}

                        {isAdmin && (
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Xóa task"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Add/Edit Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {editingTask ? "Chỉnh sửa Task" : "Thêm Task Mới"}
                  </h3>
                  <form
                    onSubmit={editingTask ? handleEditTask : handleAddTask}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tiêu đề
                      </label>
                      <input
                        type="text"
                        required
                        value={newTask.title}
                        onChange={(e) =>
                          setNewTask({ ...newTask, title: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Mô tả
                      </label>
                      <textarea
                        required
                        value={newTask.description}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            description: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Độ ưu tiên
                      </label>
                      <select
                        value={newTask.priority}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            priority: e.target.value as
                              | "low"
                              | "medium"
                              | "high",
                          })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="low">Thấp</option>
                        <option value="medium">Trung bình</option>
                        <option value="high">Cao</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Hạn hoàn thành
                      </label>
                      <input
                        type="date"
                        required
                        value={newTask.dueDate}
                        onChange={(e) =>
                          setNewTask({ ...newTask, dueDate: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                      >
                        {editingTask ? "Cập nhật" : "Thêm Task"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
