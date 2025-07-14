import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User, Mail, MapPin, Send, AlertCircle, Shield } from "lucide-react";
import * as yup from "yup";

interface BuyerFormData {
  name: string;
  email: string;
  address: string;
}

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
    reset();
  };

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-xl border border-slate-200/50">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <User className="h-16 w-16 text-slate-400" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Buyer Information
        </h2>
        <p className="text-slate-600">
          Please fill in your details to complete the order
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="flex items-center space-x-2 text-sm font-semibold text-slate-700 mb-2"
          >
            <User className="h-4 w-4" />
            <span>Full Name *</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-slate-200 focus:border-slate-400"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="flex items-center space-x-2 text-sm font-semibold text-slate-700 mb-2"
          >
            <Mail className="h-4 w-4" />
            <span>Email Address *</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-slate-200 focus:border-slate-400"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="flex items-center space-x-2 text-sm font-semibold text-slate-700 mb-2"
          >
            <MapPin className="h-4 w-4" />
            <span>Shipping Address *</span>
          </label>
          <textarea
            id="address"
            {...register("address")}
            rows={4}
            className={`form-input w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none ${
              errors.address
                ? "border-red-400 focus:border-red-500"
                : "border-slate-200 focus:border-slate-400"
            }`}
            placeholder="Enter your complete shipping address"
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.address.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full text-white py-4 px-6 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Submit Order</span>
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500 flex items-center justify-center space-x-1">
          <Shield className="h-4 w-4" />
          <span>Your information is secure and protected</span>
        </p>
      </div>
    </div>
  );
};

export default BuyerForm;
