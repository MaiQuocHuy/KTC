import { fetchTasks } from "@/lib/api";
import TaskList from "@/components/TaskList";
import Navigation from "@/components/Navigation";
import { Suspense } from "react";

// Server-Side Rendering
export default async function TaskSSRPage() {
  const tasksData = await fetchTasks(1, 20);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Navigation />

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Server-Side Rendering (SSR)
          </h1>
          <p className="text-gray-600">
            This page is rendered on the server for each request. Data is always
            fresh but response time may be slower.
          </p>
        </div>

        <Suspense
          fallback={<div className="text-center py-8">Loading tasks...</div>}
        >
          <TaskList tasks={tasksData.tasks} renderType="SSR" />
        </Suspense>
      </div>
    </div>
  );
}

// Force dynamic rendering
export const dynamic = "force-dynamic";
