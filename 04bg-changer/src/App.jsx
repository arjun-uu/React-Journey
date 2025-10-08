import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 py-2 bg-white shadow-lg rounded gap-2">
        <button
          className="px-4 py-2 rounded font-semibold bg-white"
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-red-600"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-green-500"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-yellow-400"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-blue-600"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-black"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="px-4 py-2 rounded font-semibold bg-pink-600"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
