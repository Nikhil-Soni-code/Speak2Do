
function Mic({ isOn, toggleListening }) {
  return (
    <div
      className="mic w-16 h-16 flex justify-center items-center rounded-full border-4 border-gray-500 cursor-pointer transition-all duration-300"
      onClick={toggleListening}
      title={isOn ? "Click to Stop Listening" : "Click to Start Listening"}
    >
      <i
        className={`mic-icon text-3xl ${isOn ? "text-red-600" : "text-amber-200"} transition-all duration-300`}
      ></i>
      <div className="mic-shadow absolute inset-0 bg-opacity-50 rounded-full"></div>
    </div>
  );
}
