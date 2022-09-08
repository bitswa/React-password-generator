import { useEffect, useState } from "react";
import { Result } from "./components/Result";
import { Settings } from "./components/Settings";
import "./App.css";

function App() {
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const [settingsModal, setSettingsModal] = useState(false);

  const [selectedList, setSelectedList] = useState([]);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const handleSubmit = () => {
    if (!lower && !upper && !number && !symbol) return;

    setPassword("");
    for (let i = 0; i < length; i++) {
      const randomNumber = parseInt(Math.random() * selectedList.length);
      setPassword((prev) => prev + selectedList[randomNumber]);
    }
    setSettingsModal(true);
  };

  useEffect(() => {
    const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
    const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const symbols = ["!", "@", "#", "$", "%", "&", "*", "."];

    setSelectedList([]);

    if (lower) setSelectedList((prev) => [...prev, ...lowerLetters]);
    
    if (upper) setSelectedList((prev) => [...prev, ...upperLetters]);
    
    if (number) setSelectedList((prev) => [...prev, ...numbers]);
    
    if (symbol) setSelectedList((prev) => [...prev, ...symbols]);
    
  }, [lower, upper, number, symbol]);

  return (
    <div className="App">
      {!settingsModal ? (
        <Settings
          length={length}
          setLength={setLength}
          setUpper={setUpper}
          setLower={setLower}
          setNumber={setNumber}
          setSymbol={setSymbol}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Result
          password={password}
          setSettingsModal={setSettingsModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
