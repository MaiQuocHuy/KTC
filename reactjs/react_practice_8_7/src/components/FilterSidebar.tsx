import { useEffect, useState } from "react";
import type { Category } from "../types";

interface FilterSidebarProps {
  selectedCategories: number[];
  onCategoryChange: (categoryId: number, checked: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategories,
  onCategoryChange,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="w-64 p-4">
        <h3 className="text-lg font-semibold mb-4">Loading categories...</h3>
      </div>
    );
  }

  return (
    <div className="w-64 p-4 bg-gray-50 h-fit">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={(e) => onCategoryChange(category.id, e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
