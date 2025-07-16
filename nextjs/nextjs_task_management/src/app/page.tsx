"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page on homepage
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Đang chuyển hướng...</h1>
        <p className="mt-2 text-gray-600">Vui lòng đợi...</p>
      </div>
    </div>
  );
}
