import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";

// Validation schema
const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email format"),
  password: yup.string().required("Password is required"),
});

type SignInFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Mock user data for profile display
  const mockUser = {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: mockUser.email, // Pre-fill with user's email
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log("Sign in data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Signed in successfully!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Panel - Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center p-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-pink-100 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>

        {/* Main content */}
        <div className="text-center z-10 max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
            Set Your Partner
            <br />
            Recruitment on Auto-Pilot
          </h1>

          {/* Central illustration area */}
          <div className="relative mx-auto mb-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Happy woman with profile cards"
              className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />

            {/* Floating profile cards */}
            <div className="absolute -top-4 -right-6 w-16 h-20 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-1/2 -right-8 w-16 h-20 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-20 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-1/4 -left-8 w-16 h-20 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-white">
        {/* Grovia Logo */}
        <div className="mb-8 flex items-center">
          <div className="w-8 h-8 bg-red-500 rounded mr-2"></div>
          <span className="text-xl font-bold text-gray-800">Grovia</span>
        </div>

        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Log in</h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Login to your account
          </h3>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Thank you for get back to Grovia, let's access our the best
            recommendation contact for you.
          </p>

          {/* User Profile Display */}
          {/* <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-gray-50 border">
            <img
              src={mockUser.profileImage}
              alt={mockUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">{mockUser.name}</p>
              <p className="text-sm text-gray-500">{mockUser.email}</p>
            </div>
          </div> */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="jane.doe@gmail.com"
                className={`w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full border px-4 py-3 pr-12 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2 text-red-500" />
                Remember me
              </label>
              <a href="#" className="text-red-500 hover:text-red-600">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {isSubmitting ? "Signing In..." : "Continue"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account yet?{" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Join Grovia Now!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
