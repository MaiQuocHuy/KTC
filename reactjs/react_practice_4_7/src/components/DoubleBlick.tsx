import React from "react";

const DoubleBlick: React.FC<{
  handleDoubleClick: () => void;
  lastDoubleClick: string;
}> = ({ handleDoubleClick, lastDoubleClick }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      {/* Display the alrt double-clic for 2 second when click double-click */}
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      {lastDoubleClick && <p className="text-red-500">{lastDoubleClick}</p>}
    </section>
  );
};

export default DoubleBlick;
