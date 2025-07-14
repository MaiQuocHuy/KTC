import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
