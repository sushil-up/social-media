function TestInput() {
    return (
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="file"
          id="image"
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
          }}
        />
      </div>
    );
  }
  
  export default TestInput;
  