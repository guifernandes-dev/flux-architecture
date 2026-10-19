import "./App.css"
import { Counter } from "./features/counter/Counter"
import logo from "./logo.svg"

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </header>
  </div>
)
