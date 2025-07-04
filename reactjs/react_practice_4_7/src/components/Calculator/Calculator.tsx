import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: string
  ): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleSubmit = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = [
    { symbol: "+", label: "+" },
    { symbol: "-", label: "−" },
    { symbol: "*", label: "×" },
    { symbol: "/", label: "÷" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Display */}
          <div className="bg-gradient-to-r bg-gray-300 p-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <input
                type="text"
                value={display}
                readOnly
                className="w-full bg-transparent text-right text-3xl font-mono font-semibold text-white placeholder-white/50 focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Numbers Grid */}
            <div className="grid grid-cols-3 gap-3">
              {numbers.map((number) => (
                <button
                  key={number}
                  onClick={() => inputNumber(String(number))}
                  className="h-14 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-xl font-semibold text-gray-800 text-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
                >
                  {number}
                </button>
              ))}
            </div>

            {/* Zero button */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => inputNumber("0")}
                className="col-span-2 h-14 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-xl font-semibold text-gray-800 text-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
              >
                0
              </button>
              <button
                onClick={() => inputNumber(".")}
                className="h-14 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-xl font-semibold text-gray-800 text-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
              >
                .
              </button>
            </div>

            {/* Operations */}
            <div className="grid grid-cols-4 gap-3">
              {operations.map((op) => (
                <button
                  key={op.symbol}
                  onClick={() => inputOperation(op.symbol)}
                  className={`h-14 rounded-xl font-semibold text-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95 ${
                    operation === op.symbol
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white"
                  }`}
                >
                  {op.label}
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleSubmit}
                className="h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 active:from-green-700 active:to-emerald-700 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
              >
                =
              </button>
              <button
                onClick={handleClear}
                className="h-14 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 active:from-red-700 active:to-pink-700 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
