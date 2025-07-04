import React from "react";

const CheckBox: React.FC<{
  handleChangeCheckbox: () => void;
  checkbox: boolean;
}> = ({ handleChangeCheckbox, checkbox }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      <input type="checkbox" onChange={handleChangeCheckbox} />
      <p>Checkbox is: {checkbox ? "Checked" : "Unchecked"}</p>
    </section>
  );
};

export default CheckBox;
