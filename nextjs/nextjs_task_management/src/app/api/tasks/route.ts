import { NextResponse } from "next/server";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  dueDate: string;
  userId: number;
}

// Mock data
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
  {
    id: 4,
    title: "Review code pull request",
    description: "Kiểm tra và review code của team members",
    status: "pending",
    priority: "medium",
    createdAt: "2025-01-16",
    dueDate: "2025-01-20",
    userId: 1,
  },
  {
    id: 5,
    title: "Cập nhật documentation",
    description: "Cập nhật tài liệu API và user guide",
    status: "in-progress",
    priority: "low",
    createdAt: "2025-01-15",
    dueDate: "2025-01-22",
    userId: 1,
  },
];

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    data: tasks,
    message: "Tasks retrieved successfully",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTask: Task = {
    id: Date.now(),
    title: body.title,
    description: body.description,
    status: "pending",
    priority: body.priority,
    createdAt: new Date().toISOString().split("T")[0],
    dueDate: body.dueDate,
    userId: 1, // Mock user ID
  };

  tasks.push(newTask);

  return NextResponse.json({
    success: true,
    data: newTask,
    message: "Task created successfully",
  });
}
