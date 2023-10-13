import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/*
  !Functional component | normal js function
  function MyApp() {
    return (
      <div>
        <h1>This is my app!</h1>;
      </div>
    );
  }
  ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
*/

/*
  !JSX | converts to object
  const anotherElement = (
    <a href="https://google.com" target="_blank">
      Visit google
    </a>
  );
  ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);
*/

/*
 !JSX internally gets converted to object using React.createElement()
  const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "using react create element"
  );
  ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
