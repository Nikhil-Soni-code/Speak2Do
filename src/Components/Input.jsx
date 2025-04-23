import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Input({ addElements }) {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  const { isOn, setOn } = useState(false);

  if (!browserSupportsSpeechRecognition) return null;

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setOn(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    addElements(transcript);
    setTimeout(resetTranscript, 500); // Reset after a short delay
    setOn(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-8 mb-8 mt-8 p-6 rounded-xl shadow-md">
      {/* Start Listening Button */}
      <button
        onClick={startListening}
        className="px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Start Listening
      </button>

      {/* Stop Listening Button */}
      <button
        onClick={stopListening}
        className="px-8 py-4 bg-red-500 text-white font-semibold text-lg rounded-md shadow hover:bg-red-600 transition duration-300 ease-in-out"
      >
        Stop Listening
      </button>
    </div>
  );
}

export default Input;
