import { fetchTasksSSG } from "@/lib/api";
import TaskList from "@/components/TaskList";
import Navigation from "@/components/Navigation";

// Static Site Generation
export default async function TaskSSGPage() {
  const tasksData = await fetchTasksSSG();
  console.log("Tasks Data:", tasksData);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Navigation />

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Static Site Generation (SSG)
          </h1>
          <p className="text-gray-600">
            This page is pre-rendered at build time. Very fast loading but data
            may be stale.
          </p>
        </div>

        <TaskList tasks={tasksData.tasks} renderType="SSG" />
      </div>
    </div>
  );
}

// Force static generation
export const dynamic = "force-static";
