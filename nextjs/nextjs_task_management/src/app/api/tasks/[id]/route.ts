import { NextResponse } from "next/server";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  dueDate: string;
  userId: number;
}

// Mock data - in real app, this would come from database
let tasks: Task[] = [
  {
    id: 1,
    title: "Hoàn thành dự án website",
    description: "Phát triển website bán hàng online với React và Next.js",
    status: "in-progress",
    priority: "high",
    createdAt: "2025-01-15",
    dueDate: "2025-01-30",
    userId: 1,
  },
  {
    id: 2,
    title: "Viết báo cáo tháng",
    description: "Tổng hợp báo cáo kết quả công việc tháng 1",
    status: "pending",
    priority: "medium",
    createdAt: "2025-01-14",
    dueDate: "2025-01-25",
    userId: 1,
  },
  {
    id: 3,
    title: "Họp team daily",
    description: "Cuộc họp hàng ngày với team development",
    status: "completed",
    priority: "low",
    createdAt: "2025-01-16",
    dueDate: "2025-01-16",
    userId: 1,
  },
];

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id);
  const body = await request.json();

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return NextResponse.json(
      {
        success: false,
        message: "Task not found",
      },
      { status: 404 }
    );
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...body,
  };

  return NextResponse.json({
    success: true,
    data: tasks[taskIndex],
    message: "Task updated successfully",
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id);

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return NextResponse.json(
      {
        success: false,
        message: "Task not found",
      },
      { status: 404 }
    );
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  return NextResponse.json({
    success: true,
    data: deletedTask,
    message: "Task deleted successfully",
  });
}
