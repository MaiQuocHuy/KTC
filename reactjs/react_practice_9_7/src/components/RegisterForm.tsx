import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";

// Validation schema
const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10,15}$/, "Phone Number must be 10-15 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]*$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and no spaces"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  newsletterOptIn: yup.boolean().default(false),
  termsAgreement: yup
    .boolean()
    .required("You must agree to Terms, Privacy Policy, and Fees")
    .oneOf([true], "You must agree to Terms, Privacy Policy, and Fees"),
});

type RegisterFormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletterOptIn: boolean;
  termsAgreement: boolean;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const watchedTermsAgreement = watch("termsAgreement");

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Register data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Account created successfully!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Panel - Blue with Illustration */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-yellow-400 opacity-60 rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white opacity-30"></div>

        {/* Logo and heading */}
        <div className="text-center z-10 max-w-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-white rounded mr-2"></div>
            <span className="text-xl font-bold">Lottery Display</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            A few clicks away from creating your Lottery Display
          </h2>
        </div>

        {/* Lottery display illustration */}
        <div className="relative">
          <div className="w-64 h-48 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-6 shadow-2xl">
            {/* Display grid */}
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded shadow-lg"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
              <div className="bg-white bg-opacity-20 rounded"></div>
            </div>
          </div>

          {/* Decorative elements around display */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Register</h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Manage all your lottery efficiently
          </h3>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Let's get you all set up so you can verify your personal account and
            begin setting up your profile.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="John"
                  className={`w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Doe"
                  className={`w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="0987654321"
                  className={`w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john.doe@example.com"
                  className={`w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Secret123"
                    className={`w-full border px-4 py-3 pr-12 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Secret123"
                    className={`w-full border px-4 py-3 pr-12 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start text-sm text-gray-600">
                <input
                  {...register("newsletterOptIn")}
                  type="checkbox"
                  className="mr-3 mt-0.5 text-blue-500 focus:ring-blue-500"
                />
                Yes, I want to receive Lottery Display emails
              </label>

              <label className="flex items-start text-sm text-gray-600">
                <input
                  {...register("termsAgreement")}
                  type="checkbox"
                  className="mr-3 mt-0.5 text-blue-500 focus:ring-blue-500"
                />
                I agree to all the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline ml-1"
                >
                  Terms
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Fees
                </a>
              </label>
              {errors.termsAgreement && (
                <p className="text-red-500 text-xs ml-6">
                  {errors.termsAgreement.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid || !watchedTermsAgreement}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
