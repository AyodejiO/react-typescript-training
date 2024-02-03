import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DummyComponent from "./DummyComponent";

const App = () => {

  const [name, setName] = React.useState<string>("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('name') as HTMLInputElement;
    setName(input.value);
  }

  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Dummy Trying To Typescript 🤪
      <DummyComponent name="Makhosi" age="123" isSad={true} />

      {name === "" ?
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <button>Submit</button>
        </form> :
        <p>Hi, {name}</p>
      }

    </header>

    <div>
      <a href="https://testing-library.com/docs/react-testing-library/intro/">LeARN REACT</a>
    </div>
  </div>
};

export default App;
