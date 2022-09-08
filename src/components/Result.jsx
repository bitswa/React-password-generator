import { useState } from "react";

export const Result = ({ password, setSettingsModal, handleSubmit }) => {
  const [copied, setCopied] = useState({});
  const [clipboard, setClipboard] = useState({});

  return (
    <div className="result">
      <span>
        <h3 style={copied}>{password}</h3>
      </span>
      <div className="result__div">
        <button onClick={() => setSettingsModal(false)}>Settings</button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopied({ background: "#FCE762", color: "#0C0C0C" });
            setClipboard({ opacity: 1 });
            setTimeout(() => setClipboard({}), 1500);
          }}
        >
          Copy
        </button>
      </div>
      <button
        onClick={() => {
          handleSubmit();
          setCopied({});
        }}
      >
        Generate
      </button>

      <div style={clipboard} className="clipboard">
        <span>Copied to clipboard</span>
      </div>
    </div>
  );
};
