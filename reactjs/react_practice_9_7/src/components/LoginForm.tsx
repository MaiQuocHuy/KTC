import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>();

  const rememberMe = watch("rememberMe");

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);

    // Simulate localStorage logic when Remember Me is checked
    if (data.rememberMe) {
      console.log("User will be remembered - saving to localStorage");
      localStorage.setItem("rememberedUser", data.username);
    } else {
      localStorage.removeItem("rememberedUser");
    }
  };

  // Validation for username (email or phone)
  const validateUsername = (value: string) => {
    if (value.length < 5) {
      return "Username must be at least 5 characters";
    }

    // Check if it's an email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if it's a phone number (digits only, 10-15 characters)
    const phoneRegex = /^[0-9]{10,15}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      return true;
    }

    return "Username must be a valid email or phone number";
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Grovia
        </h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Username Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username (Email or Phone Number) *
          </label>
          <input
            {...register("username", {
              required: "Username is required",
              validate: validateUsername,
            })}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="you@example.com or 0123456789"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?!.*\s).+$/,
                  message:
                    "Password must contain at least 1 letter and no spaces",
                },
              })}
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="GroviaPass123"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me and Reset Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              {...register("rememberMe")}
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-sm text-gray-600">Remember Me</label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
          >
            Reset Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
        >
          Sign In
        </button>

        {/* Registration Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:underline font-medium"
            >
              Join Grovia Now!
            </a>
          </p>
        </div>

        {/* Remember Me Status */}
        {rememberMe && (
          <div className="bg-green-50 border border-green-200 rounded-md p-3 mt-4">
            <p className="text-sm text-green-700">
              ✓ You will be remembered on this device
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
