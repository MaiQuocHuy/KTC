import { fetchTaskById } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { notFound } from "next/navigation";

// Incremental Static Regeneration
export default async function TaskISRPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("Fetching task with ID:", id);
  //   try {
  const task = await fetchTaskById(parseInt(id));
  console.log("Task Data:", task);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Navigation />

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Incremental Static Regeneration (ISR)
          </h1>
          <p className="text-gray-600">
            This page is statically generated but revalidated every 30 seconds.
            Good balance between performance and freshness.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{task.title}</h2>
            <div className="flex items-center space-x-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  task.status
                )}`}
              >
                {task.status.replace("_", " ")}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                ISR
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Task Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">ID:</span>
                    <span className="text-gray-800">{task.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Status:</span>
                    <span className="text-gray-800">
                      {task.status.replace("_", " ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Assignee:</span>
                    <span className="text-gray-800">
                      {task.assignee?.username || "Unknown"}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Timestamps
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Created:</span>
                    <span className="text-gray-800">
                      {new Date(task.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Updated:</span>
                    <span className="text-gray-800">
                      {new Date(task.updatedAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <Link
                href="/task-ssr"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View All Tasks (SSR)
              </Link>
              <Link
                href="/task-ssg"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                View All Tasks (SSG)
              </Link>
              <Link
                href="/task-csr"
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                View All Tasks (CSR)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //   } catch (error) {
  //     notFound();
  //   }
}

// Enable ISR with revalidation every 30 seconds
export const revalidate = 30;
