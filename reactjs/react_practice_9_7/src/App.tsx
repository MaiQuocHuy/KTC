import { useState } from "react";

import "./App.css";
import AuthLayouts from "./components/AuthLayouts";
import RegisterFormFull from "./components/RegisFormFull";

function App() {
  return (
    <>
      <AuthLayouts />
      <RegisterFormFull />
    </>
  );
}

export default App;
