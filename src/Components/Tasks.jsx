import { useState } from "react";
import MessageToAddMoreTasks from "./Message";
import Input from "./Input";

function Tasks() {
  const [task, updatedTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  function changeColorOnClick(index) {
    const updatedState = [...completed];
    updatedState[index] = !updatedState[index];
    setCompleted(updatedState);
  }

  function addElements(input) {
    if(input.trim() === "") return; // Prevent adding empty tasks
    updatedTasks([...task, input]);
    setCompleted([...completed, false]);
    
  }

  return (
    <div className="px-4 sm:px-10 mt-6">
      <Input addElements={addElements} />
      {task.length > 0 ? (
        <ul className="space-y-6 mt-6">
          {task.map((item, index) => (
            <li
              key={index}
              className={`p-6 rounded-3xl shadow-lg border-[1.5px] flex justify-between items-center flex-col sm:flex-row gap-4 transition-all duration-300 transform backdrop-blur-md ${
                completed[index]
                  ? "bg-green-500/30 border-green-400 text-green-100"
                  : "bg-white/10 border-white/20 text-white"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 w-full">
                <span
                  className={`text-lg sm:text-xl font-medium tracking-wide ${
                    completed[index] ? "line-through opacity-70" : "opacity-95"
                  }`}
                >
                  {item}
                </span>
              </div>

              <button
                onClick={() => changeColorOnClick(index)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ease-in-out hover:scale-105 ${
                  completed[index]
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {completed[index] ? "Undo" : "Mark Done"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <MessageToAddMoreTasks />
      )}
    </div>
  );
}

export default Tasks;
