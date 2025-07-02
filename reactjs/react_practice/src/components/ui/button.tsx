import React from "react";
import {
  AiFillApple,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Button = ({
  text,
  appleIcon = false,
  arrowIcon = false,
  facebookIcon = false,
  googleIcon = false,
}: {
  text: string;
  appleIcon?: boolean;
  arrowIcon?: boolean;
  facebookIcon?: boolean;
  googleIcon?: boolean;
}) => {
  return (
    <div>
      <button
        className={`px-4 py-2 ${googleIcon || facebookIcon ? "bg-white border-black border-2 text-black font-semibold" : "bg-black text-white "} rounded-lg flex ${arrowIcon && "justify-between px-6"} hover:bg-gray-800 transition-colors duration-300 w-xs`}
      >
        <AiFillApple
          className={`text-xl w-12 mr-4 ${!appleIcon && "hidden"}`}
        />
        <AiFillGoogleCircle
          className={`text-xl w-12 mr-4 ${!googleIcon && "hidden"}`}
        />
        <AiFillFacebook
          className={`text-xl w-12 mr-4 ${!facebookIcon && "hidden"}`}
        />
        {text}
        <AiOutlineArrowRight className={`text-xl ${!arrowIcon && "hidden"}`} />
      </button>
    </div>
  );
};

export default Button;
