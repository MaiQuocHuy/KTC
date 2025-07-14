import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define form data interface
interface BuyerFormData {
  name: string;
  email: string;
  address: string;
}

// Yup validation schema according to requirements
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Minimum 2 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Minimum 5 characters"),
});

const BuyerForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BuyerFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: BuyerFormData) => {
    console.log("Form submitted:", data);
    // Reset form after successful submission
    reset();
  };

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-xl border border-white/20">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Buyer Information
        </h2>
        <p className="text-gray-600">
          Please fill in your details to complete the order
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            👤 Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-purple-500"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            📧 Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-purple-500"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            🏠 Shipping Address *
          </label>
          <textarea
            id="address"
            {...register("address")}
            rows={4}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none ${
              errors.address
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-purple-500"
            }`}
            placeholder="Enter your complete shipping address"
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full text-white py-4 px-6 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
        >
          🚀 Submit Order
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          🔒 Your information is secure and protected
        </p>
      </div>
    </div>
  );
};

export default BuyerForm;
