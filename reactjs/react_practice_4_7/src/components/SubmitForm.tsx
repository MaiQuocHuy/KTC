import React from "react";

const SubmitForm: React.FC<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  valueSubmit: string;
  handleChangeValueSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleSubmit, valueSubmit, handleChangeValueSubmit }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter"
          value={valueSubmit}
          onChange={handleChangeValueSubmit}
        />
        <button type="submit">Submit</button>
        <p>You typed: {valueSubmit}</p>
      </form>
    </section>
  );
};

export default SubmitForm;
