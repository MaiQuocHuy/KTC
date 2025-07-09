import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MobilePhone = () => {
  // Shared state
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // SignUp form
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm({
    defaultValues: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      password: "",
    },
  });

  const onSubmitSignUp = (data: any) => console.log("SignUp:", data);

  // SignIn form
  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm({
    defaultValues: {
      email: "jane.doe@gmail.com",
      password: "",
    },
  });

  const onSubmitSignIn = (data: any) => console.log("SignIn:", data);

  const onSubmitEmail = (data: any) => console.log("Email:", data);

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 py-16 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 text-white p-8 rounded-3xl w-full max-w-sm shadow-2xl">
          {/* Status bar */}
          <div className="flex justify-between items-center mb-8 text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Back arrow */}
          <div className="mb-6">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          {/* Profile image */}
          <div className="mb-8 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
          </div>

          <h3 className="text-3xl font-bold mb-6">Hi!</h3>

          <form
            onSubmit={handleSubmitEmail(onSubmitEmail)}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl text-gray-900 bg-gray-100 border-none"
              {...registerEmail("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition duration-200"
            >
              Continue
            </button>

            <div className="text-center text-sm text-gray-400 my-4">or</div>

            <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl flex items-center justify-center gap-3 mb-3">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              Continue with Facebook
            </button>

            <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl flex items-center justify-center gap-3 mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                />
              </svg>
              Continue with Apple
            </button>
          </form>

          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <a href="#" className="text-green-400 hover:text-green-300">
                Sign up
              </a>
            </p>
            <p className="text-sm">
              <a href="#" className="text-green-400 hover:text-green-300">
                Forgot your password?
              </a>
            </p>
          </div>
        </div>
        {/* Screen 2: Sign Up */}
        <div className="bg-gray-900 text-white p-8 rounded-3xl w-full max-w-sm shadow-2xl">
          <div className="flex justify-between items-center mb-8 text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          <div className="mb-6">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="mb-8 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
          </div>

          <h3 className="text-3xl font-bold mb-4">Sign up</h3>
          <p className="text-sm text-gray-400 mb-2">
            Looks like you don't have an account.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Let's create a new account for <br />
            jane.doe@gmail.com
          </p>

          <form
            onSubmit={handleSubmitSignUp(onSubmitSignUp)}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              {...registerSignUp("name", { required: "Name is required" })}
              className="w-full p-4 rounded-xl text-gray-900 bg-gray-100"
            />
            {errorsSignUp.name && (
              <p className="text-red-500 text-sm">
                {errorsSignUp.name.message}
              </p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...registerSignUp("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="w-full p-4 rounded-xl text-gray-900 bg-gray-100"
            />
            {errorsSignUp.email && (
              <p className="text-red-500 text-sm">
                {errorsSignUp.email.message}
              </p>
            )}

            <div className="relative">
              <input
                type={showPasswordSignUp ? "text" : "password"}
                placeholder="Password"
                {...registerSignUp("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Minimum 8 characters" },
                })}
                className="w-full p-4 pr-12 rounded-xl text-gray-900 bg-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPasswordSignUp((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPasswordSignUp ? "Hide" : "View"}
              </button>
            </div>
            {errorsSignUp.password && (
              <p className="text-red-500 text-sm">
                {errorsSignUp.password.message}
              </p>
            )}

            <p className="text-xs text-gray-400">
              By selecting Agree and continue below, I agree to{" "}
              <a href="#" className="text-green-400 hover:text-green-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-400 hover:text-green-300">
                Privacy Policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl"
            >
              Agree and continue
            </button>
          </form>
        </div>

        {/* Screen 3: Sign In */}
        <div className="bg-gray-900 text-white p-8 rounded-3xl w-full max-w-sm shadow-2xl">
          <div className="flex justify-between items-center mb-8 text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          <div className="mb-6">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="mb-8 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
          </div>

          <h3 className="text-3xl font-bold mb-6">Log in</h3>

          {/* Profile mock */}
          <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-gray-800">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f"
              alt="Jane Dow"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Jane Dow</p>
              <p className="text-sm text-gray-400">jane.doe@gmail.com</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmitSignIn(onSubmitSignIn)}
            className="space-y-4"
          >
            <div className="relative">
              <input
                type={showPasswordSignIn ? "text" : "password"}
                placeholder="Password"
                {...registerSignIn("password", {
                  required: "Password is required",
                })}
                className="w-full p-4 pr-12 rounded-xl text-gray-900 bg-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPasswordSignIn((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPasswordSignIn ? "Hide" : "View"}
              </button>
            </div>
            {errorsSignIn.password && (
              <p className="text-red-500 text-sm">
                {errorsSignIn.password.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl"
            >
              Continue
            </button>

            <p className="text-center text-sm">
              <a href="#" className="text-green-400 hover:text-green-300">
                Forgot your password?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
