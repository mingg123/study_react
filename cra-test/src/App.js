import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import Button from "./Button1";
import Box from "./Box1";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
    </div>
  );
}

export default App;
