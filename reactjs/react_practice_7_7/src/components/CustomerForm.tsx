import { useState, useEffect } from "react";
import type {
  Customer,
  CreateCustomerRequest,
  UpdateCustomerRequest,
} from "../types/Customer";

interface CustomerFormProps {
  customer?: Customer;
  onSubmit: (customer: CreateCustomerRequest | UpdateCustomerRequest) => void;
  onCancel: () => void;
}

export const CustomerForm = ({
  customer,
  onSubmit,
  onCancel,
}: CustomerFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    birthday: "",
    email: "",
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        firstName: customer.firstName,
        lastName: customer.lastName,
        phoneNumber: customer.phoneNumber,
        address: customer.address,
        birthday: customer.birthday,
        email: customer.email,
      });
    }
  }, [customer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      birthday: "",
      email: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-gray-700 text-xl font-semibold mb-5">
        {customer ? "Edit Customer" : "Add New Customer"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="firstName"
            className="block mb-1 font-semibold text-gray-700"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="lastName"
            className="block mb-1 font-semibold text-gray-700"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="phoneNumber"
            className="block mb-1 font-semibold text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-1 font-semibold text-gray-700"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="birthday"
            className="block mb-1 font-semibold text-gray-700"
          >
            Birthday:
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors invalid:border-red-500"
          />
        </div>

        <div className="flex gap-3 justify-start mt-8 flex-col sm:flex-row">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-colors"
          >
            {customer ? "Update Customer" : "Add Customer"}
          </button>
          <button
            type="button"
            className="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={onCancel}
          >
            Cancel
          </button>
          {!customer && (
            <button
              type="button"
              className="bg-slate-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-slate-700 transition-colors"
              onClick={resetForm}
            >
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
