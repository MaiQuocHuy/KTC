import { Task } from "@/types/task";
import Link from "next/link";

interface TaskListProps {
  tasks: Task[];
  renderType?: string;
}

export default function TaskList({ tasks, renderType }: TaskListProps) {
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

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
        {renderType && (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {renderType}
          </span>
        )}
      </div>

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
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    task.status
                  )}`}
                >
                  {task.status.replace("_", " ")}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <div>
                  <span className="font-medium">Assignee:</span>{" "}
                  {task.assignee?.username || "Unknown"}
                </div>
                <div>
                  <span className="font-medium">Created:</span>{" "}
                  {new Date(task.createdAt).toLocaleDateString()}
                </div>
              </div>

              <div className="mt-3 flex space-x-2">
                <Link
                  href={`/task-isr/${task.id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                >
                  View Details (ISR)
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
