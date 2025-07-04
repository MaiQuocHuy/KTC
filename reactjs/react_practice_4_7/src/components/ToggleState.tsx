import React from "react";

const ToggleState: React.FC<{ handleToggleState: () => void, state: boolean }> = ({ handleToggleState, state }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md space-y-3">
      <h1>Toggle Switch</h1>
      <button
        onClick={handleToggleState}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Toggle State
      </button>
      <p>State: {state ? "On" : "Off"}</p>
    </section>
  );
};

export default ToggleState;
