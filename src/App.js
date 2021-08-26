import "./App.css"
import logger from "./helpers/utils/logger"
import logo from "./logo.svg"

function App() {
  logger.withTag("Hello").debug("Hello")

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
          With debug logger
        </a>
      </header>
    </div>
  )
}

export default App
