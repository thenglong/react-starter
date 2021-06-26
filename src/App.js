import "./App.css"
import { Grid, Typography } from "@material-ui/core"

import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography bgcolor="beige"></Typography>
        <Grid xs={10}></Grid>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
      </header>
    </div>
  )
}

export default App
