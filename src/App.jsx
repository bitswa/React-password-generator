import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);

  const [selectedList, setSelectedList] = useState([]);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);

  const upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowerLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handleSubmit = () => {
    if (!lower && !upper && !number) return;

    setPassword("");
    for (let i = 0; i < length; i++) {
      const randomNumber = parseInt(Math.random() * selectedList.length);
      setPassword((prev) => [...prev, selectedList[randomNumber]]);
    }
  };

  useEffect(() => {
    setSelectedList([]);
    if (lower) {
      setSelectedList((prev) => [...prev, ...lowerLetters]);
    }

    if (upper) {
      setSelectedList((prev) => [...prev, ...upperLetters]);
    }

    if (number) {
      setSelectedList((prev) => [...prev, ...numbers]);
    }
  }, [lower, upper, number]);

  useEffect(() => {
    console.log(selectedList);
  }, [selectedList]);

  return (
    <div className="App">
      <div className="password">{password}</div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        length: {length}
        <label className="form__length_label">
          <span>4</span>
          <input
            type="range"
            min={4}
            max={32}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span>32</span>
        </label>
        <label className="switch">
          Lowercase
          <input
            type="checkbox"
            className="hidden-toggle"
            onChange={(e) => setLower(e.target.checked)}
          />
          <div className="slider">
            <button></button>
          </div>
        </label>
        <label className="switch">
          Uppercase
          <input
            type="checkbox"
            className="hidden-toggle"
            onChange={(e) => setUpper(e.target.checked)}
          />
          <div className="slider">
            <button></button>
          </div>
        </label>
        <label className="switch">
          Numbers
          <input
            type="checkbox"
            className="hidden-toggle"
            onChange={(e) => setNumber(e.target.checked)}
          />
          <div className="slider">
            <button></button>
          </div>
        </label>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
