import React from "react";
import Button from "../components/ui/Button";

const ButtonIconGroup = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-100 p-5">
      <Button
        text="Get started"
        showArrow
        className="bg-black text-white hover:bg-gray-800"
      />
      <Button
        text="Continue with Apple"
        iconSrc="/logos/apple.svg"
        className="bg-black border-2 border-black text-white font-semibold hover:bg-gray-200"
      />
      <Button
        text="Continue with Google"
        iconSrc="/logos/google.svg"
        className="bg-white border-2 border-black text-black font-semibold hover:bg-gray-200"
      />
      <Button
        text="Continue with Facebook"
        iconSrc="/logos/facebook.svg"
        className="bg-white border-2 border-black text-black font-semibold hover:bg-gray-200"
      />
    </div>
  );
};

export default ButtonIconGroup;
