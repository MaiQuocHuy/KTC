import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import MobilePhone from "./MobilePhone";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 space-y-12">
      <LoginForm />
      <RegisterForm />
      <MobilePhone />
    </div>
  );
};

export default AuthLayouts;
