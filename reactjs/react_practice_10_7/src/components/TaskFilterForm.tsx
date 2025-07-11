import { useForm } from "react-hook-form";
import type { Filter, TaskFilterFormProps } from "../types";

// Filter form data interface
interface FormData {
  status: string;
  priority: string;
}

const STATUS_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "All Statuses" },
  { value: "to_do", label: "To Do" },
  { value: "in_progress", label: "In Progress" },
  { value: "done", label: "Done" },
];

const PRIORITY_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "All Priorities" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export default function TaskFilterForm({ onSearch }: TaskFilterFormProps) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      status: "",
      priority: "",
    },
  });

  // Handle form submission to apply filters
  const onSubmit = async (data: FormData) => {
    const filters: Filter = {};

    if (data.status && data.status !== "") {
      filters.status = data.status;
    }

    if (data.priority && data.priority !== "") {
      filters.priority = data.priority;
    }

    onSearch(filters);
  };

  const handleReset = () => {
    reset();
    onSearch({}); // Clear all filters
  };

  return (
    <div className="bg-white p-6">
      <div className="mt-4 transition-all duration-300 ease-in-out">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Horizontal Filter Form */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-4 space-y-4 lg:space-y-0">
            {/* Status Filter */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Status
              </label>
              <select
                id="status"
                {...register("status")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>

            {/* Priority Filter */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Priority
              </label>
              <select
                id="priority"
                {...register("priority")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {PRIORITY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex-shrink-0 flex space-x-2">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Searching..." : "Search"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
