// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
function App() {
  // normal function
  function hundlerClick1() {
    alert("sing a click handler with normal function");
  }

  // arrow function
  const hundlerClick2 = () => {
    alert("Using a click handler with Arrow function");
  };
  
  //click hundler with parameter
  const hundlerClick3 = (num) => {
    alert(num+5)
  };

  return (
    <>
      <div>
        <h1>Hey Welcome to react project</h1>
        {/* Using a click handler with normal function */}
        <div className="btn-card">
          <p>Using a click handler with normal function</p>
          <button onClick={hundlerClick1}>Click me </button>
        </div>
        {/* Using a click handler with Arrow function */}
        <div className="btn-card">
          <p>Using a click handler with Arrow function</p>
          <button onClick={hundlerClick2}>Click me </button>
        </div>
        {/* using inline arrow funtion */}
        <div className="btn-card">
          <p>Using a click handler with inline Arrow function</p>
          <button
            onClick={() => {
              alert("Using a click handler with inline Arrow function");
            }}
          >
            Click me{" "}
          </button>
        </div>
        {/*Using a click handler with parameter */}
        <div className="btn-card">
          <p>Using a click handler with parameter</p>
          <button onClick={() => {hundlerClick3(10)}}>Click me </button>
        </div>
      </div>
    </>
  );
}

export default App;
