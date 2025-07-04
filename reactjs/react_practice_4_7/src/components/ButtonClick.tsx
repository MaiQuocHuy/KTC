import React from "react";

const ButtonClick: React.FC<{ onClick: () => void, count: number }> = ({ onClick, count }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md ">
      <h1>Button Click Counter</h1>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Click me
      </button>
      <p>Clicked: {count} times</p>
    </section>
  );
};

export default ButtonClick;
