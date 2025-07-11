// src/pages/Login.tsx

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks";
import type { LoginCredentials } from "../types";

// Yup validation schema with strong typing
const validationSchema: yup.ObjectSchema<LoginCredentials> = yup.object({
  username: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, dirtyFields },
    setError,
  } = useForm<LoginCredentials>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      username: "tungnt@softech.vn",
      password: "123456789",
    },
  });

  const onSubmit = async (data: LoginCredentials): Promise<void> => {
    try {
      await login(data);
      navigate("/tasks");
    } catch (error) {
      console.error("Login error:", error);
      setError("root", {
        type: "manual",
        message: "Login failed. Please check your credentials and try again.",
      });
    }
  };

  const isFormSubmitting = isSubmitting || isLoading;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Root error display */}
        {errors.root && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.root.message}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            className={`w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.username
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : !errors.username && dirtyFields.username
                ? "border-green-500 focus:border-green-500 focus:ring-green-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
            }`}
            placeholder="Enter your username"
            disabled={isFormSubmitting}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : !errors.password && dirtyFields.password
                ? "border-green-500 focus:border-green-500 focus:ring-green-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
            }`}
            placeholder="Enter your password"
            disabled={isFormSubmitting}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isFormSubmitting || !isValid}
          className={`w-full py-2 rounded-md font-medium transition-colors ${
            isFormSubmitting || !isValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isFormSubmitting ? "Logging in..." : "Login"}
        </button>

        {/* Form validation status indicator */}
        <div className="mt-4 text-center">
          <p
            className={`text-xs ${isValid ? "text-green-500" : "text-red-500"}`}
          >
            {isValid
              ? "Form is valid ✓"
              : "Please fill in all required fields correctly"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
