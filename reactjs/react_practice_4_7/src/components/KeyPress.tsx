import React from "react";

const KeyPress: React.FC<{
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  lastKey: string;
}> = ({ handleKeyDown, lastKey }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      <input
        type="text"
        placeholder="Enter" 
        onKeyDown={handleKeyDown}
        className="border border-gray-300 p-2 rounded-md"
      />
      <p>Last key pressed: {lastKey}</p>
    </section>
  );
};

export default KeyPress;
