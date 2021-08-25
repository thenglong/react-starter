import "./App.css"
import log from "./logger"
import logo from "./logo.svg"

function App() {
  log.info("App Component render")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          With logger
        </a>
      </header>
    </div>
  )
}

export default App
