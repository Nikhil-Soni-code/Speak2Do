import { useState,useEffect } from "react";

function Time() {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
      setInterval(() => {
        setDate(new Date());
      },1000);
      return () => {
        clearInterval();
      };
    }, []);
    return (
      <div className="text-center my-4">
        <h3 className="text-2xl font-semibold text-white inline-block px-6 py-2 rounded-full shadow-lg ">
          {date.toLocaleString()}
        </h3>
      </div>
    );
  }
  
  export default Time;
  