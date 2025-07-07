import type {
  Customer,
  CreateCustomerRequest,
  UpdateCustomerRequest,
} from "../types/Customer";

const BASE_URL = "https://server.aptech.io/online-shop/customers";

export const customerService = {
  // Get all customers
  getAllCustomers: async (): Promise<Customer[]> => {
    const response = await fetch(BASE_URL, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch customers: ${response.statusText}`);
    }

    return response.json();
  },

  // Get customer by ID
  getCustomerById: async (id: number): Promise<Customer> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch customer: ${response.statusText}`);
    }

    return response.json();
  },

  // Create new customer
  createCustomer: async (
    customer: CreateCustomerRequest
  ): Promise<Customer> => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error(`Failed to create customer: ${response.statusText}`);
    }

    return response.json();
  },

  // Update existing customer
  updateCustomer: async ( 
    id: number,
    customer: UpdateCustomerRequest
  ): Promise<Customer> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error(`Failed to update customer: ${response.statusText}`);
    }

    return response.json();
  },

  // Delete customer
  deleteCustomer: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete customer: ${response.statusText}`);
    }
  },
};
