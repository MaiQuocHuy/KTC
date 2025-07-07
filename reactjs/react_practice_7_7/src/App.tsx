import { useState, useEffect } from "react";
import type {
  Customer,
  CreateCustomerRequest,
  UpdateCustomerRequest,
} from "./types/Customer";
import { customerService } from "./services/customerService";
import { CustomerList } from "./components/CustomerList";
import { CustomerForm } from "./components/CustomerForm";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<
    Customer | undefined
  >();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load customers on component mount
  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await customerService.getAllCustomers();
      setCustomers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load customers");
    } finally {
      setLoading(false);
    }
  };

  const handleAddCustomer = () => {
    setEditingCustomer(undefined);
    setShowForm(true);
  };

  const handleEditCustomer = (customer: Customer) => {
    setEditingCustomer(customer);
    setShowForm(true);
  };

  const handleDeleteCustomer = async (id: number) => {
    try {
      await customerService.deleteCustomer(id);
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete customer");
    }
  };

  const handleFormSubmit = async (
    customerData: CreateCustomerRequest | UpdateCustomerRequest
  ) => {
    try {
      if (editingCustomer) {
        // Update existing customer
        const updatedCustomer = await customerService.updateCustomer(
          editingCustomer.id!,
          customerData as UpdateCustomerRequest
        );
        setCustomers(
          customers.map((customer) =>
            customer.id === editingCustomer.id ? updatedCustomer : customer
          )
        );
      } else {
        // Create new customer
        const newCustomer = await customerService.createCustomer(
          customerData as CreateCustomerRequest
        );
        setCustomers([...customers, newCustomer]);
      }
      setShowForm(false);
      setEditingCustomer(undefined);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to save customer");
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCustomer(undefined);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-5 font-sans">
        <div className="text-center text-lg text-gray-600 py-10">
          Loading customers...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5 font-sans">
      <h1 className="text-center text-gray-800 text-3xl font-bold mb-8">
        Customer Management System
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-5 text-red-800">
          <p>Error: {error}</p>
          <button
            onClick={loadCustomers}
            className="bg-red-700 text-white border-none px-4 py-2 rounded cursor-pointer ml-2 hover:bg-red-800 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {showForm ? (
        <CustomerForm
          customer={editingCustomer}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      ) : (
        <>
          <div className="flex gap-2 mb-5 flex-col sm:flex-row">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-colors"
              onClick={handleAddCustomer}
            >
              Add New Customer
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors"
              onClick={loadCustomers}
            >
              Refresh
            </button>
          </div>

          <CustomerList
            customers={customers}
            onEdit={handleEditCustomer}
            onDelete={handleDeleteCustomer}
          />
        </>
      )}
    </div>
  );
}

export default App;
