import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // 🔹 Automatically generate password whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-[350px]">
        <h1 className="text-center text-xl font-semibold mb-4">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="flex-1 rounded-l-md px-3 py-2 text-black border border-white text-gray-400"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        {/* Slider */}
        <div className="flex items-center justify-between text-orange-400 mb-4">
          <input
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="flex-1 mr-3 accent-blue-500"
          />
          <span>Length: {length}</span>
        </div>

        {/* Checkboxes */}
        <div className="flex gap-4 text-orange-400 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
