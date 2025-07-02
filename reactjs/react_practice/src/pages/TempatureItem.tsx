import React from "react";
import Temperature from "../components/ui/tempature";

const TempatureItem = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-5">
      <Temperature />
    </div>
  );
};

export default TempatureItem;
