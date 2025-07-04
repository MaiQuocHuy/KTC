import React, { useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
  dob: string;
  country: string;
  hobbies: string[];
  profilePicture: File | null;
  bio: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    hobbies: [],
    profilePicture: null,
    bio: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateFullName = (name: string): string => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 3)
      return "Full name must be at least 3 characters";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    if (!hasLetter || !hasNumber)
      return "Password must contain both letters and numbers";
    return "";
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string
  ): string => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^\d{10,}$/;
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phoneRegex.test(cleanPhone))
      return "Phone number must be at least 10 digits";
    return "";
  };

  const validateGender = (gender: string): string => {
    if (!gender) return "Please select your gender";
    return "";
  };

  const validateDateOfBirth = (dob: string): string => {
    if (!dob) return "Date of birth is required";
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      // Haven't had birthday this year yet
      if (age - 1 < 18) return "You must be at least 18 years old";
    } else {
      if (age < 18) return "You must be at least 18 years old";
    }
    return "";
  };

  const validateCountry = (country: string): string => {
    if (!country) return "Please select your country";
    return "";
  };

  const validateHobbies = (hobbies: string[]): string => {
    if (hobbies.length === 0) return "Please select at least one hobby";
    return "";
  };

  const validateProfilePicture = (file: File | null): string => {
    if (!file) return ""; // Optional field
    const allowedTypes = [".jpg", ".jpeg", ".png"];
    const fileName = file.name.toLowerCase();
    const isValidType = allowedTypes.some((type) => fileName.endsWith(type));
    if (!isValidType)
      return "Profile picture must be a .jpg, .jpeg, or .png file";
    return "";
  };

  const validateBio = (bio: string): string => {
    if (bio.length > 300) return "Bio must not exceed 300 characters";
    return "";
  };

  // Validate single field
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case "fullname":
        return validateFullName(value);
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        return validateConfirmPassword(value, formData.password);
      case "phone":
        return validatePhone(value);
      case "gender":
        return validateGender(value);
      case "dob":
        return validateDateOfBirth(value);
      case "country":
        return validateCountry(value);
      case "hobbies":
        return validateHobbies(value);
      case "profilePicture":
        return validateProfilePicture(value);
      case "bio":
        return validateBio(value);
      default:
        return "";
    }
  };

  // Validate all fields
  const validateAllFields = (): boolean => {
    const newErrors: Record<string, string> = {};

    newErrors.fullname = validateFullName(formData.fullname);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    newErrors.confirmPassword = validateConfirmPassword(
      formData.confirmPassword,
      formData.password
    );
    newErrors.phone = validatePhone(formData.phone);
    newErrors.gender = validateGender(formData.gender);
    newErrors.dob = validateDateOfBirth(formData.dob);
    newErrors.country = validateCountry(formData.country);
    newErrors.hobbies = validateHobbies(formData.hobbies);
    newErrors.profilePicture = validateProfilePicture(formData.profilePicture);
    newErrors.bio = validateBio(formData.bio);

    // Remove empty errors
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    let newValue: any = value;

    if (type === "checkbox") {
      const hobbies = formData.hobbies.includes(value)
        ? formData.hobbies.filter((hobby) => hobby !== value)
        : [...formData.hobbies, value];
      newValue = hobbies;
      setFormData((prev) => ({ ...prev, hobbies }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      newValue = file;
      setFormData((prev) => ({ ...prev, profilePicture: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Real-time validation
    const error = validateField(name, newValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // Special case for confirm password - also validate when password changes
    if (name === "password") {
      const confirmPasswordError = validateConfirmPassword(
        formData.confirmPassword,
        value
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmPasswordError,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateAllFields();

    if (isValid) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Registration successful!");
        console.log("Form submitted:", formData);

        // Reset form after successful submission
        setFormData({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          gender: "",
          dob: "",
          country: "",
          hobbies: [],
          profilePicture: null,
          bio: "",
        });
        setErrors({});

        // Reset file input manually (file inputs can't be controlled through React state)
        const fileInput = document.getElementById(
          "profilePicture"
        ) as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } catch (error) {
        alert("Registration failed. Please try again.");
      }
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    setIsSubmitting(false);
  };

  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "vn", label: "Vietnam" },
    { value: "other", label: "Other" },
  ];

  const hobbies = [
    { value: "reading", label: "Reading" },
    { value: "sports", label: "Sports" },
    { value: "music", label: "Music" },
    { value: "travel", label: "Travel" },
    { value: "cooking", label: "Cooking" },
  ];

  // Helper function to get input border color based on validation state
  const getInputBorderClass = (fieldName: string) => {
    if (errors[fieldName]) {
      return "border-red-500 focus:ring-red-500";
    }
    if (formData[fieldName as keyof FormData] && !errors[fieldName]) {
      return "border-green-500 focus:ring-green-500";
    }
    return "border-gray-300 focus:ring-blue-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-300 text-black px-8 py-6">
            <h2 className="text-3xl font-bold text-black text-center">
              Registration Form
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Please fill in all required fields
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="px-8 py-8 space-y-6"
          >
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="fullname"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${getInputBorderClass("fullname")}`}
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.fullname}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${getInputBorderClass("email")}`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${getInputBorderClass("password")}`}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${getInputBorderClass("confirmPassword")}`}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${getInputBorderClass("phone")}`}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["male", "female", "other"].map((gender) => (
                  <div key={gender} className="flex items-center">
                    <input
                      type="radio"
                      id={gender}
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor={gender}
                      className="ml-2 text-sm text-gray-700 capitalize cursor-pointer"
                    >
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
              {errors.gender && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.gender}
                </span>
              )}
            </div>

            {/* Date of Birth and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="dob"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${getInputBorderClass("dob")}`}
                />
                {errors.dob && (
                  <span className="text-red-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.dob}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${getInputBorderClass("country")}`}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <span className="text-red-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.country}
                  </span>
                )}
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                Hobbies <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hobbies.map((hobby) => (
                  <div key={hobby.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={hobby.value}
                      name="hobbies"
                      value={hobby.value}
                      checked={formData.hobbies.includes(hobby.value)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor={hobby.value}
                      className="ml-2 text-sm text-gray-700 cursor-pointer"
                    >
                      {hobby.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.hobbies && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.hobbies}
                </span>
              )}
            </div>

            {/* Profile Picture */}
            <div className="space-y-2">
              <label
                htmlFor="profilePicture"
                className="block text-sm font-semibold text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept=".jpg,.jpeg,.png"
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${getInputBorderClass("profilePicture")}`}
              />
              {errors.profilePicture && (
                <span className="text-red-500 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.profilePicture}
                </span>
              )}
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <label
                htmlFor="bio"
                className="block text-sm font-semibold text-gray-700"
              >
                Bio / About You
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself (max 300 characters)"
                maxLength={300}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none ${getInputBorderClass("bio")}`}
              />
              <div className="flex justify-between">
                <span
                  className={`text-sm ${formData.bio.length > 250 ? "text-orange-500" : "text-gray-500"}`}
                >
                  {formData.bio.length}/300 characters
                </span>
                {errors.bio && (
                  <span className="text-red-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.bio}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </div>
                ) : (
                  "Register Account"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
