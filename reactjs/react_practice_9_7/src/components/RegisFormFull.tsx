import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff, Upload } from "lucide-react";

// Validation schema
const registrationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Password must contain letters and numbers"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10,}$/, "Phone Number must be at least 10 digits"),
  gender: yup
    .string()
    .required("Please select a gender")
    .oneOf(["male", "female", "other"], "Please select a valid gender"),
  dateOfBirth: yup
    .date()
    .required("Date of Birth is required")
    .max(
      new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000),
      "You must be at least 18 years old"
    ),
  country: yup.string().required("Please select a country"),
  hobbies: yup
    .array()
    .min(1, "Select at least one hobby")
    .required("Select at least one hobby"),
  profilePicture: yup
    .mixed()
    .required("Profile Picture is required")
    .test(
      "fileFormat",
      "Must be a valid .jpg, .jpeg, or .png image file",
      (value) => {
        const fileList = value as FileList;
        if (!fileList || fileList.length === 0) return false;
        const file = fileList[0];
        return ["image/jpeg", "image/jpg", "image/png"].includes(file.type);
      }
    ),
  bio: yup.string().max(300, "Bio must not exceed 300 characters").default(""),
});

type RegistrationFormData = yup.InferType<typeof registrationSchema>;

const countries = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "japan", label: "Japan" },
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
];

const hobbiesOptions = [
  { id: "reading", label: "Reading" },
  { id: "traveling", label: "Traveling" },
  { id: "gaming", label: "Gaming" },
];

const RegisterFormFull = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });

  const watchedBio = watch("bio") ?? "";
  const bioLength = watchedBio.length;

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    console.log("Registration data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Registration successful!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 space-y-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        User Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Enter your full name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your.email@example.com"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password *
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password *
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            placeholder="1234567890"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="male"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="female"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="other"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            {...register("dateOfBirth", { valueAsDate: true })}
            type="date"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <select
            {...register("country")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Hobbies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hobbies *
          </label>
          <div className="flex gap-6">
            {hobbiesOptions.map((hobby) => (
              <label key={hobby.id} className="flex items-center">
                <input
                  {...register("hobbies")}
                  type="checkbox"
                  value={hobby.id}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                {hobby.label}
              </label>
            ))}
          </div>
          {errors.hobbies && (
            <p className="text-red-500 text-sm mt-1">
              {errors.hobbies.message}
            </p>
          )}
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Picture *
          </label>
          <div className="relative">
            <input
              {...register("profilePicture")}
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden"
              id="profilePicture"
            />
            <label
              htmlFor="profilePicture"
              className={`flex items-center justify-center w-full border-2 border-dashed px-6 py-4 rounded-md cursor-pointer hover:bg-gray-50 transition-colors ${
                errors.profilePicture ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Upload className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-gray-600">
                {selectedFile
                  ? selectedFile.name
                  : "Click to upload image (.jpg, .jpeg, .png)"}
              </span>
            </label>
          </div>
          {errors.profilePicture && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profilePicture.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio (Optional)
          </label>
          <textarea
            {...register("bio")}
            placeholder="Tell us about yourself..."
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              errors.bio ? "border-red-500" : "border-gray-300"
            }`}
          />
          <div className="flex justify-between mt-1">
            <div>
              {errors.bio && (
                <p className="text-red-500 text-sm">{errors.bio.message}</p>
              )}
            </div>
            <p
              className={`text-sm ${
                bioLength > 300 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {bioLength}/300 characters
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 rounded-md font-medium transition duration-200"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterFormFull;
