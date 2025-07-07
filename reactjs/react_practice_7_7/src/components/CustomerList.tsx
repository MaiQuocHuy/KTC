import type { Customer } from "../types/Customer";

interface CustomerListProps {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

export const CustomerList = ({
  customers,
  onEdit,
  onDelete,
}: CustomerListProps) => {
  const handleDelete = (customer: Customer) => {
    if (
      customer.id &&
      window.confirm(
        `Are you sure you want to delete ${customer.firstName} ${customer.lastName}?`
      )
    ) {
      onDelete(customer.id);
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-gray-700 text-xl font-semibold mb-5">
        Customer List
      </h2>
      {customers.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No customers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  ID
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  First Name
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Last Name
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Email
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Phone
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Address
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Birthday
                </th>
                <th className="bg-gray-100 p-3 text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 border-b border-gray-200">
                    {customer.id}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.firstName}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.lastName}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.email}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.phoneNumber}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.address}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    {customer.birthday}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    <div className="flex gap-1">
                      <button
                        className="bg-orange-500 text-white px-3 py-1 rounded text-xs cursor-pointer hover:bg-orange-600 transition-colors"
                        onClick={() => onEdit(customer)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded text-xs cursor-pointer hover:bg-red-600 transition-colors"
                        onClick={() => handleDelete(customer)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
