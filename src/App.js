import React from "react";
import "./App.css";

function App() {
  const [time, setTimer] = React.useState(new Date().toLocaleTimeString());
  const TimeId = () => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
    return <span>{time}</span>;
  };
  return (
    <div className="container">
      <h3>The time is</h3>
      <TimeId />
    </div>
  );
}
export default App;
