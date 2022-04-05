import logo from "./logo.svg";
import "./App.css";
import RenderInput from "./RenderInput";
import FrameWorkList from "./FrameWorkList";

function App() {
  const output = (text) => {
    console.log(text);
  };
  const data = [
    { id: 1, item: "React" },
    { id: 2, item: "Vue" },
    { id: 3, item: "Angular" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RenderInput outputConsole={output} />
        <FrameWorkList frameworks={data} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
