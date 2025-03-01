import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#ddd");

  return (
    <div
      className="w-screen h-screen flex justify-center items-end p-4 "
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-2 bg-amber-50 rounded-lg p-2">
        <Button name="red" onClick={() => setColor("#ef4444")} />
        <Button name="green" onClick={() => setColor("#22c55e")} />
        <Button name="blue" onClick={() => setColor("#3b82f6")} />
      </div>
    </div>
  );
}

export default App;
