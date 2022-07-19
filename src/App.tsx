import { FormTodo } from "./components/FormTodo";
import { Logo } from "./components/Logo";

import "./App.module.css";

function App() {
  return (
    <div className="container">
      <header>
        <Logo />
      </header>
      <FormTodo />
    </div>
  );
}

export default App;
