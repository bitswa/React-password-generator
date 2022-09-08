export const Settings = ({
  length,
  setLength,
  setUpper,
  setLower,
  setNumber,
  setSymbol,
  handleSubmit,
}) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label className="form__length_label">
        <span className="length">{length}</span>
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
      <div className="form__options">
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
        <label className="switch">
          Symbols
          <input
            type="checkbox"
            className="hidden-toggle"
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <div className="slider">
            <button></button>
          </div>
        </label>
      </div>
      <button className="submit">Submit</button>
    </form>
  );
};
