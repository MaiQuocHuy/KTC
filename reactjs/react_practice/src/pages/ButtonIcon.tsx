import React from "react";
import Button from "../components/ui/button";

const ButtonIcon = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-100 p-5">
      <Button text="Get started" arrowIcon={true} />
      <Button text="Continue with Apple" appleIcon={true} />
      <Button text="Continue with Google" googleIcon={true} />
      <Button text="Continue with Facebook" facebookIcon={true} />
    </div>
  );
};

export default ButtonIcon;
