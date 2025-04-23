import React, { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Tasks from "./Components/Tasks";
import Time from "./Components/Time";
import Input from "./Components/Input"; // Import the Input component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-tr from-blue-800 via-purple-800 to-indigo-800 py-10 font-sans relative">
      <div className="w-full max-w-2xl p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl backdrop-blur-md border border-gray-700">
        <Heading />
        <Time />
        
        {/* Your To-Do List (Tasks) */}
        <Tasks />
      </div>
    </div>
  );
}

export default App;
