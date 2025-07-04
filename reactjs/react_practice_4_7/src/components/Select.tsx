import React from "react";

const Select: React.FC<{
  handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
}> = ({ handleChangeSelect, selected }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      <select
        className="border border-gray-300 p-2 rounded-md"
        onChange={handleChangeSelect}
        value={selected}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </select>
      <p>Selected: {selected}</p>
    </section>
  );
};

export default Select;
