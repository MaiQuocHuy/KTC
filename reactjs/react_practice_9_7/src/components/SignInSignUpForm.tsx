import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

interface SignInFormData {
  email: string;
  password: string;
}

const SignInSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
    watch: watchSignUp,
  } = useForm<SignUpFormData>();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "john.doe@example.com", // Pre-filled email
    },
  });

  const watchedEmail = watchSignUp("email");

  const onSubmitSignUp = (data: SignUpFormData) => {
    console.log("Sign Up Data:", data);
  };

  const onSubmitSignIn = (data: SignInFormData) => {
    console.log("Sign In Data:", data);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setIsSignUp(true)}
            className={`px-4 py-2 rounded ${
              isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`px-4 py-2 rounded ${
              !isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign In
          </button>
        </div>
      </div>

      {isSignUp ? (
        <form
          onSubmit={handleSubmitSignUp(onSubmitSignUp)}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Create Account
          </h2>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...registerSignUp("name", { required: "Name is required" })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errorsSignUp.name && (
              <p className="text-red-500 text-sm mt-1">
                {errorsSignUp.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...registerSignUp("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errorsSignUp.email && (
              <p className="text-red-500 text-sm mt-1">
                {errorsSignUp.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...registerSignUp("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errorsSignUp.password && (
              <p className="text-red-500 text-sm mt-1">
                {errorsSignUp.password.message}
              </p>
            )}
          </div>

          {/* Dynamic Message */}
          {watchedEmail && (
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-700">
                Looks like you don't have an account. Let's create a new account
                for <strong>{watchedEmail}</strong>.
              </p>
            </div>
          )}

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2">
            <input
              {...registerSignUp("agreeToTerms", {
                required: "You must agree to the terms",
              })}
              type="checkbox"
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              By selecting Agree and continue below, I agree to Terms of Service
              and Privacy Policy.
            </label>
          </div>
          {errorsSignUp.agreeToTerms && (
            <p className="text-red-500 text-sm">
              {errorsSignUp.agreeToTerms.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Agree and continue
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmitSignIn(onSubmitSignIn)}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome Back
          </h2>

          {/* User Profile Display */}
          <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-md">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JD</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...registerSignIn("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorsSignIn.email && (
              <p className="text-red-500 text-sm mt-1">
                {errorsSignIn.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...registerSignIn("password", {
                  required: "Password is required",
                })}
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errorsSignIn.password && (
              <p className="text-red-500 text-sm mt-1">
                {errorsSignIn.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default SignInSignUpForm;
