"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";

export default function HomePage() {
  const { isLoggedIn, user, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Task Management System
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Hệ thống quản lý công việc với xác thực và phân quyền
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          {isLoggedIn ? (
            <div>
              <h3 className="text-lg font-medium text-green-600 mb-3">
                ✅ Đã đăng nhập thành công!
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>ID:</strong> {user?.id}
                </p>
                <p>
                  <strong>Trạng thái:</strong>{" "}
                  {user?.isActive ? "Hoạt động" : "Không hoạt động"}
                </p>
                <p>
                  <strong>Quyền:</strong>{" "}
                  {user?.roles?.map((role) => role.name).join(", ")}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-block text-center"
                >
                  Vào Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Chưa đăng nhập
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Vui lòng đăng nhập để sử dụng hệ thống
              </p>
              <Link
                href="/login"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-block text-center"
              >
                Đăng nhập
              </Link>
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">📝 Hướng dẫn test:</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Sử dụng email/password hợp lệ từ API server.aptech.io</p>
            <p>
              • Người dùng có role "Administrators" hoặc "Managers" sẽ có quyền:
            </p>
            <ul className="ml-4 list-disc">
              <li>Thêm task mới</li>
              <li>Chỉnh sửa task</li>
              <li>Xóa task</li>
            </ul>
            <p>• Người dùng khác chỉ có thể xem và cập nhật trạng thái task</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <h4 className="font-medium text-yellow-900 mb-2">
            🔐 Tính năng bảo mật:
          </h4>
          <div className="text-sm text-yellow-800 space-y-1">
            <p>• Middleware bảo vệ route /dashboard</p>
            <p>• Auto redirect khi chưa đăng nhập</p>
            <p>• Phân quyền dựa trên roles từ API</p>
            <p>• Token management với localStorage</p>
            <p>• Auto logout khi token expired (401)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
