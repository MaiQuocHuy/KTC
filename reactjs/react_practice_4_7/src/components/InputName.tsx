import React from "react";

const InputName: React.FC<{
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueInput: string;
}> = ({ handleChangeInput, valueInput }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md ">
      <h1>Input</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md"
        onChange={handleChangeInput}
      />
      <p>You typed: {valueInput || "Nothing"}</p>
    </section>
  );
};

export default InputName;
