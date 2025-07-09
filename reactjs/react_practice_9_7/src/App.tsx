import { useState } from "react";
import SignInSignUpForm from "./components/SignInSignUpForm";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

type FormType = "signin-signup" | "register" | "login";

function App() {
  const [activeForm, setActiveForm] = useState<FormType>("signin-signup");

  const forms = [
    {
      id: "signin-signup",
      label: "Sign In/Sign Up",
      component: <SignInSignUpForm />,
    },
    { id: "register", label: "Register", component: <RegisterForm /> },
    { id: "login", label: "Login", component: <LoginForm /> },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          React Hook Form Practice
        </h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-md">
            {forms.map((form) => (
              <button
                key={form.id}
                onClick={() => setActiveForm(form.id)}
                className={`px-6 py-3 rounded-md transition-all duration-200 font-medium ${
                  activeForm === form.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {form.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Display */}
        <div className="transition-all duration-300 ease-in-out">
          {forms.find((form) => form.id === activeForm)?.component}
        </div>

        {/* Form Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Form Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-blue-600 mb-2">
                Sign In/Sign Up
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Toggle between forms</li>
                <li>• Password show/hide</li>
                <li>• Dynamic email message</li>
                <li>• Terms agreement</li>
                <li>• Form validation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-600 mb-2">Register Form</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive validation</li>
                <li>• Password confirmation</li>
                <li>• Phone number validation</li>
                <li>• Newsletter opt-in</li>
                <li>• Required terms agreement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-purple-600 mb-2">Login Form</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email or phone login</li>
                <li>• Remember me feature</li>
                <li>• localStorage simulation</li>
                <li>• Professional design</li>
                <li>• Reset password link</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
